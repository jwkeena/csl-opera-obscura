const textsDiv = document.getElementById("texts");

for (let i=0; i < texts.length; i++) {

    let li = document.createElement('li');
    li.innerText = texts[i].year + ". " + texts[i].title;
    if (texts[i].printedIn) {
        li.innerText += " in " + texts[i].printedIn;
    }
    if (texts[i].issueOrVolume) {
        li.innerText += ", " + texts[i].issueOrVolume;
    }
    if (texts[i].pageRange) {
        li.innerText += ", " + texts[i].pageRange;
    }

    li.innerText += "."
    textsDiv.insertAdjacentElement("beforebegin", li);

}

