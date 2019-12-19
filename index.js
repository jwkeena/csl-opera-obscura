const proseDiv = document.getElementById("prose");

for (let i=0; i < prose.length; i++) {

    let li = document.createElement('li');
    li.innerText = prose[i].year + ". " + prose[i].title;
    if (prose[i].printedIn) {
        li.innerText += " in " + prose[i].printedIn;
    }
    if (prose[i].issueOrVolume) {
        li.innerText += ", " + prose[i].issueOrVolume;
    }
    if (prose[i].pageRange) {
        li.innerText += ", " + prose[i].pageRange;
    }

    li.innerText += "."
    proseDiv.insertAdjacentElement("beforebegin", li);

}

