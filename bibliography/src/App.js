import React, { Component } from "react";
import { texts } from './texts';
import TableRow from './components/TableRow/';
import FormSelect from './components/FormSelect';
import './App.css';

class App extends Component {

  state = {
    texts: null,
    sortByOption: "year",
    typesDisplayed: [],
  };

  componentDidMount() {
    this.formatTexts();
  };

  formatTexts() {
    // Get fresh copy of texts from import (that's the only time they need to be formatted)
    let textsCopy = texts;
    // Format data properly
    let formattedTexts = [];
    for (let i = 0; i < textsCopy.length; i++) {
      let formattedText = {};
      formattedText.year = textsCopy[i].year;
      formattedText.type = textsCopy[i].type;
      formattedText.title = textsCopy[i].title;
      if (texts[i].printedIn) {
        formattedText.reference = textsCopy[i].printedIn
      }
      if (texts[i].issueOrVolume) {
        formattedText.reference += ", " + textsCopy[i].issueOrVolume;
      }
      if (texts[i].pageRange) {
        formattedText.reference += ", " + textsCopy[i].pageRange;
      }
      if (texts[i].textProvided !== false) {
        formattedText.textProvided = textsCopy[i].textProvided;
      } else {
        formattedText.textProvided = false
      }
      if (texts[i].notes !== null) {
        // Expected input is html, since the tooltip the data will be passed to can accept html
        formattedText.notes = "<ul class='left-align' style='padding-left: 15px; padding-right: 15px;'>";
        for (let j = 0; j < textsCopy[i].notes.length; j++) {
            formattedText.notes += "<li>" + textsCopy[i].notes[j] + "</li>";
            if (j !== (textsCopy[i].notes.length - 1)) {
              formattedText.notes += "<br>";
            }
        }
        formattedText.notes += "</ul>";
      } else {
        formattedText.notes = null;
      }
      formattedTexts.push(formattedText);
    }
    // Replace current state with newly formatted texts array
    this.setState({
      texts: formattedTexts
    }, () => this.sort("year")) // Set standard sorting option
  };

  updateSortOption = (option) => {
    this.setState({
      sortByOption: option
    }, () => {
      this.sort(option);
    })
  }

  sort(option) {
    let sortedTexts;

    if (option === "year") {
      sortedTexts = this.state.texts.sort(function (a, b) {
        // If years match, then sort by title instead
        if (a["year"] === b["year"]) {
          // If titles match, then sort by reference instead
          if (a["title"] === b["title"]) {
            return a["reference"].localeCompare(b["reference"], undefined, {ignorePunctuation: true}); 
          }
          return a["title"].localeCompare(b["title"], undefined, {ignorePunctuation: true}); // Use localeCompare to ignore quotations in the string
        }
        return (a, b) => a["year"] > b["year"] ? 1 : -1; // But use basic comparison for integers
      });
    }

    if (option === "type") {
      sortedTexts = this.state.texts.sort(function (a, b) {
        if (a["type"] === b["type"]) {
          if (a["year"] === b["year"]) {
            if (a["title"] === b["title"]) {
              return a["reference"].localeCompare(b["reference"], undefined, {ignorePunctuation: true}); 
            }
            return a["title"].localeCompare(b["title"], undefined, {ignorePunctuation: true}); 
          }
          return (a, b) => a["year"] > b["year"] ? 1 : -1;
        }
        return a["type"].localeCompare(b["type"], undefined, {ignorePunctuation: true}); 
      });
    }

    if (option === "title") {
      sortedTexts = this.state.texts.sort(function (a, b) {
        if (a["title"] === b["title"]) {
          if (a["year"] === b["year"]) {
            return a["reference"].localeCompare(b["reference"], undefined, {ignorePunctuation: true}); 
          }
          return (a, b) => a["year"] > b["year"] ? 1 : -1;
        }
        return a["title"].localeCompare(b["title"], undefined, {ignorePunctuation: true}); 
      });
    }

    if (option === "reference") {
      sortedTexts = this.state.texts.sort(function (a, b) {
        if (a["reference"] === b["reference"]) {
          return a["title"].localeCompare(b["title"], undefined, {ignorePunctuation: true});
        }
        return (a, b) => a["reference"] > b["reference"] ? 1 : -1;
      });
    }

    this.setState({
      texts: sortedTexts
    })
  }

  updateTypesDisplayed = (types) => {
    console.log("types to be displayed", types);
  }

  render() {
    return (
      <div className = "container">
        <div className="App">
          <h1>Lewisiana Opera Nova et Obscura</h1>
          <h4>A Bibliography of Obscure and Newly Published C.S. Lewis Texts</h4>
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
          <hr/>*/}
          <br/>
          <div className="row valign-wrapper">
            <div className="col s1">Sort by:</div>
            <div className="input-field col s4">
              <FormSelect 
                multipleSelect={false} 
                optionNames={["Year", "Type", "Title", "Reference"]} 
                updateSortOption={this.updateSortOption}
                >
              </FormSelect>
            </div>
            <div className="col s2">Types displayed:</div>
            <div className="col s5">
              <FormSelect 
                multipleSelect={true} 
                optionNames={["Prose", "Diary", "Poetry"]}
                updateTypesDisplayed={this.updateTypesDisplayed}>
              </FormSelect>
            </div>
          </div>
          <div id="texts">
            <table className="striped responsive-table">
              <thead>
                <tr>
                  <th>Year Published</th>
                  <th>Type</th>
                  <th>Title</th>
                  <th>Reference</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.state.texts !== null ? 
                this.state.texts.map((text, index) => {
                  return (
                  <TableRow year={text.year} type={text.type} title={text.title} reference={text.reference} textProvided={text.textProvided} notes={text.notes} key={index} rowNumber={index}></TableRow>
                  )
                }) 
                : <tr>
                  <td>
                    Loading texts...
                  </td>
                </tr>}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    )
  };
};

export default App;
