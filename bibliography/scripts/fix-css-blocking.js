/**
 * Post-build script to:
 * 1. Make CRA's CSS non-render-blocking
 * 2. Delay React bundle loading until after first paint
 */
const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'build', 'index.html');

let html = fs.readFileSync(indexPath, 'utf8');

// Find the CRA-generated CSS link and make it non-blocking
html = html.replace(
  /<link href="(\/csl-opera-obscura\/static\/css\/[^"]+)" rel="stylesheet">/g,
  '<link rel="preload" href="$1" as="style" onload="this.onload=null;this.rel=\'stylesheet\'"><noscript><link rel="stylesheet" href="$1"></noscript>'
);

// Extract the React bundle URL and remove the defer script
const scriptMatch = html.match(/<script defer="defer" src="(\/csl-opera-obscura\/static\/js\/main\.[^"]+\.js)"><\/script>/);
if (scriptMatch) {
  const bundleUrl = scriptMatch[1];

  // Remove the defer script from head
  html = html.replace(/<script defer="defer" src="\/csl-opera-obscura\/static\/js\/main\.[^"]+\.js"><\/script>/, '');

  // Add inline script that loads the bundle after first paint
  const loaderScript = `<script>
requestAnimationFrame(function(){
  requestAnimationFrame(function(){
    var s=document.createElement('script');
    s.src='${bundleUrl}';
    document.body.appendChild(s);
  });
});
</script>`;

  // Insert before closing body tag
  html = html.replace('</body>', loaderScript + '</body>');
}

fs.writeFileSync(indexPath, html);
console.log('Made CRA CSS non-render-blocking and deferred React bundle loading');
