import React, { Component } from "react";
import { texts } from './texts';
import TableRow from './components/TableRow/';
import './App.css';

class App extends Component {
  
  state = {
    texts: texts
  }
  
  componentDidMount() {
    this.formatTexts();
    // const textsDiv = document.getElementById("texts");
    //   for (let i=0; i < texts.length; i++) {
    //       let li = document.createElement('li');
    //       li.innerText = texts[i].year + ". " + texts[i].title;
    //       if (texts[i].printedIn) {
    //           li.innerText += " in " + texts[i].printedIn;
    //       }
    //       if (texts[i].issueOrVolume) {
    //           li.innerText += ", " + texts[i].issueOrVolume;
    //       }
    //       if (texts[i].pageRange) {
    //           li.innerText += ", " + texts[i].pageRange;
    //       }

    //       li.innerText += "."
    //       textsDiv.insertAdjacentElement("beforebegin", li);
    //   }
  };

  formatTexts() {
    let textsCopy = this.state.texts;
    for (let i = 0; i < textsCopy.length; i++) {
      console.log(textsCopy[i].title)
    }
  }

  render() {
    return (
      <div className = "container">
        <div className="App">
          <h1>C.S. Lewis Opera Nova et Obscura</h1>
          <h3>A Bibliography of Obscure and Newly Published Lewis Texts</h3>
          {/* <p>Note: This bibliography is designed for those seeking to read all of Lewis’s words that have ever been published or are publicly available, but who are familiar with his major, and even most of his minor, works already. Hence it is intended specifically for those collectors of Lewis’s works who know all of Walter Hooper’s essay, letter, and diary collections. The pieces listed here are not usually printed in those much more easily obtainable books. </p>
          <p>Many of the following entries in this list, and some of the notes on them, are drawn verbatim from Hooper’s indispensible bibliographies in </p>
          <ul>
              <li>Hooper, C.S. Lewis: A Companion and Guide (New York: HarperCollins, 1996), pp. 799-883</li>
              <li>C.S. Lewis at the Breakfast Table and Other Reminiscences, ed. James T. Como (1992, new edition), pp. 250-301, and </li>
              <li>Remembering C.S. Lewis: Recollections of Those Who Knew Him, ed. James T. Como (San Francisco: Ignatius, 2005, 3rd edition), pp. 387-492.</li>
          </ul>

          <p>I have supplemented, expanded, or corrected Hooper’s entries as necessary, in addition to adding dozens of my own. I have not used Hooper’s long-outdated first bibliography, which can be found in Light on C.S. Lewis, ed. Jocelyn Gibb (London: Geoffrey Bles, 1965), pp. 117-60.</p>
          <p>Paul Tankard’s meticulously researched article, “Notes on the Bibliography of C.S. Lewis,” Notes & Queries, vol. 263, no. 3 (September 2018), pp. 432-8, also proved invaluable in unearthing and cataloguing several obscure letters and blurbs.</p>
          <p>Texts that were originally published only in part, but were later superseded by a complete or at least somewhat more complete printing, have usually been omitted. For example, Walter Hooper’s Preface to Kathryn Ann Lindskoog, The Lion of Judah in Never-Never Land (Grand Rapids: Eerdmans, 1973), p. 9, contains a brief passage from a realistic novel written by Lewis around 1927. This is the “Easley fragment,” now published in full in SEVEN, vol. 28 (2011), pp. 5-15. Accordingly, only the latter reference is included in this bibliography. Likewise, many of the blurbs and letters catalogued by Tankard in “Notes on the Bibliography of C.S. Lewis” also appear in the Collected Letters, and have been omitted from this list.</p>
          <p>Corrections and additions are welcome. The author can be reached at jwkeena@gmail.com.</p>
          <hr/>
          <h1>Texts</h1> */}
          <div id="texts">
            <table>
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Type</th>
                  <th>Title</th>
                  <th>Reference</th>
                  <th>Text</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {this.state.texts.map((text, index) => {
                  return (
                  <TableRow year={text.year} type={text.type} key={index}></TableRow>
                  )
                })}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    )
  };
};

export default App;
