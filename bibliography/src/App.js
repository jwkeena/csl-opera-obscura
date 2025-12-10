import React, { Component } from "react";
import { texts } from './texts';
import TableRow from './components/TableRow/';
import FormSelect from './components/FormSelect';
import AboutModal from './components/AboutModal';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import './App.css';

class App extends Component {

  state = {
    texts: null,
    backupTexts: null, // To keep a fresh copy at all times. Used for filtering
    sortByOption: "Year",
    typesDisplayed: ["Annotation", "Prose", "Letter", "Blurb", "Diary", "Poem"],
    searchTerm: '',
    searchField: 'all',
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
        if (texts[i].monthAndDay) {
          formattedText.reference += ", " + textsCopy[i].issueOrVolume;
          formattedText.reference += " (" + textsCopy[i].monthAndDay + ")";
        } else {
          formattedText.reference += ", " + textsCopy[i].issueOrVolume;
        }
      }
      if (!texts[i].issueOrVolume && texts[i].monthAndDay) {
        formattedText.reference += " (" + textsCopy[i].monthAndDay + ")";
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
        formattedText.tooltipNotes = "<ul class='left-align' style='padding-left: 15px; padding-right: 15px; font-size: .9rem'>";
        for (let j = 0; j < textsCopy[i].notes.length; j++) {
            formattedText.tooltipNotes += "<li>" + textsCopy[i].notes[j] + "</li>";
            if (j !== (textsCopy[i].notes.length - 1)) {
              formattedText.tooltipNotes += "<br>";
            }
        }
        formattedText.tooltipNotes += "</ul>";

        // But I also need notes in non-tooltip form for tablet and mobile
        formattedText.notes = "<ul class='left-align' style='font-size: .9rem; padding-left: 15px; padding-right: 5px;'>";
        for (let j = 0; j < textsCopy[i].notes.length; j++) {
            formattedText.notes += "<li style='list-style-type: square;'>" + textsCopy[i].notes[j] + "</li>";
            if (j !== (textsCopy[i].notes.length - 1)) {
              formattedText.notes += "<br>";
            }
        }
        formattedText.notes += "</ul>";
      } else {
        formattedText.notes = null;
        formattedText.tooltipNotes = null;
      }
      formattedTexts.push(formattedText);
    }
    // Replace current state with newly formatted texts array
    this.setState({
      texts: formattedTexts,
      backupTexts: formattedTexts
    }, () => {
      this.sort("year"); // Set standard sorting option
    });
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

    // Without this function all titles and references which begin with an html <i> tag will be sorted before other non-italicized strings
    function ignoreItalicTag(string) {
      if (string.startsWith("<i>")) {
        return string.slice(3);
      } else {
        return string;
      };
    }

    if (option === "year") {
      sortedTexts = this.state.texts.sort(function (a, b) {
        // If years match, then sort by title instead
        if (a["year"] === b["year"]) {
          // If titles match, then sort by reference instead
          if (ignoreItalicTag(a["title"]) === ignoreItalicTag(b["title"])) {
            return ignoreItalicTag(a["reference"]).localeCompare(ignoreItalicTag(b["reference"]), undefined, {ignorePunctuation: true}); 
          }
          return ignoreItalicTag(a["title"]).localeCompare(ignoreItalicTag(b["title"]), undefined, {ignorePunctuation: true}); // Use localeCompare to ignore quotations in the string
        }
        return a["year"] > b["year"] ? 1 : -1; // But use basic comparison for integers
      });
    }

    if (option === "title") {
      sortedTexts = this.state.texts.sort(function (a, b) {

        if (a["title"] === b["title"]) {
          if (a["year"] === b["year"]) {
            return ignoreItalicTag(a["reference"]).localeCompare(ignoreItalicTag(b["reference"]), undefined, {ignorePunctuation: true}); 
          }
          return a["year"] > b["year"] ? 1 : -1;
        }
        return ignoreItalicTag(a["title"]).localeCompare(ignoreItalicTag(b["title"]), undefined, {ignorePunctuation: true}); 
      });
    }

    if (option === "reference") {
      sortedTexts = this.state.texts.sort(function (a, b) {
        if (ignoreItalicTag(a["reference"]) === ignoreItalicTag(b["reference"])) {
          return ignoreItalicTag(a["title"]).localeCompare(ignoreItalicTag(b["title"]), undefined, {ignorePunctuation: true});
        }
        return ignoreItalicTag(a["reference"]) > ignoreItalicTag(b["reference"]) ? 1 : -1;
      });
    }

    if (option === "type") {
      sortedTexts = this.state.texts.sort(function (a, b) {
        if (a["type"] === b["type"]) {
          if (a["year"] === b["year"]) {
            if (ignoreItalicTag(a["title"]) === ignoreItalicTag(b["title"])) {
              return ignoreItalicTag(a["reference"]).localeCompare(ignoreItalicTag(b["reference"]), undefined, {ignorePunctuation: true}); 
            }
            return ignoreItalicTag(a["title"]).localeCompare(ignoreItalicTag(b["title"]), undefined, {ignorePunctuation: true}); 
          }
          return a["year"] > b["year"] ? 1 : -1;
        }
        return a["type"].localeCompare(b["type"], undefined, {ignorePunctuation: true}); 
      });
    }

    this.setState({
      texts: sortedTexts
    })
  }

  updateTypesDisplayed = (typesChosenArr) => {
    this.setState({
      typesDisplayed: typesChosenArr
    }, () => this.filterAndDisplayTypes())
  }

  filterAndDisplayTypes = () => {
    let textsCopy = this.state.backupTexts;
    let typesToDisplay = this.state.typesDisplayed;
    let filteredTexts = [];

    // Run each type against each member of the textsCopy array, push all matches to a fresh array
    // so much for using a one-line .filter: textsCopy.filter(text => text["type"] === type)
    typesToDisplay.forEach(type => {
      textsCopy.forEach(text => {
        if (text["type"] === type) {
          filteredTexts.push(text);
        }
      });
    })

    this.setState({texts: filteredTexts}, () => {
      // Re-apply sorting
      this.sort(this.state.sortByOption.toLowerCase());
      // Re-apply search filter if there's an active search term
      if (this.state.searchTerm) {
        this.filterBySearch(this.state.searchTerm, this.state.searchField);
      }
    })
  }

  handleSearch = (searchTerm, searchField) => {
    this.setState({ searchTerm, searchField }, () => {
      if (searchTerm === '') {
        // If search is cleared, revert to type-filtered texts
        this.filterAndDisplayTypes();
      } else {
        this.filterBySearch(searchTerm, searchField);
      }
    });
  }

  filterBySearch = (searchTerm, searchField) => {
    const searchLower = searchTerm.toLowerCase();
    // Start from backupTexts and apply both type and search filters
    let textsCopy = this.state.backupTexts;
    let typesToDisplay = this.state.typesDisplayed;

    // First filter by type
    let typeFilteredTexts = [];
    typesToDisplay.forEach(type => {
      textsCopy.forEach(text => {
        if (text["type"] === type) {
          typeFilteredTexts.push(text);
        }
      });
    });

    // Helper to strip HTML tags and check for match
    const stripAndMatch = (str) => {
      if (str && typeof str === 'string') {
        const plainText = str.replace(/<[^>]*>/g, '');
        return plainText.toLowerCase().includes(searchLower);
      }
      return false;
    };

    // Filter by search term based on selected field
    const searchFilteredTexts = typeFilteredTexts.filter(text => {
      if (searchField === 'all') {
        return stripAndMatch(text.title) ||
               stripAndMatch(text.reference) ||
               stripAndMatch(text.textProvided);
      } else if (searchField === 'title') {
        return stripAndMatch(text.title);
      } else if (searchField === 'reference') {
        return stripAndMatch(text.reference);
      } else if (searchField === 'textProvided') {
        return stripAndMatch(text.textProvided);
      }
      return false;
    });

    this.setState({ texts: searchFilteredTexts }, () => {
      // Re-apply sorting
      this.sort(this.state.sortByOption.toLowerCase());
    });
  }

  render() {
    return (
      <div className="App">
          
          <div className="container header">
              <AboutModal/>
              <SearchBar
                onSearch={this.handleSearch}
                searchResultCount={this.state.searchTerm ? this.state.texts?.length : null}
              />
          </div>

          <div className="container main-content">
            <br/>
            <div className="row valign-wrapper">
              <div className="col l1 m2 s12">
                <b>Sort by:</b>
                </div>
              <div className="input-field col l4 m10 s12 nudge-up-on-medium-and-lower">
                <FormSelect 
                  multipleSelect={false}
                  sortByOption={this.state.sortByOption} 
                  optionNames={["Year", "Title", "Reference", "Type"]} 
                  updateSortOption={this.updateSortOption}
                  >
                </FormSelect>
              </div>
              <div className="col s12 m2 l2"><b>Types displayed:</b></div>
              <div className="col s12 m10 l5">
                <FormSelect 
                  multipleSelect={true} 
                  optionNames={["Annotation", "Blurb", "Diary", "Letter", "Poem", "Prose"]}
                  updateTypesDisplayed={this.updateTypesDisplayed}>
                </FormSelect>
              </div>
            </div>
            <div id="texts">
                {this.state.typesDisplayed.length === 0 ?
                  <div className="row center-align">
                    <br/>
                    <h5>Choose at least one type of text to display.</h5>
                  </div>
                  :
              <table>
                <thead>
                  <tr>
                    <th className="center-align" title="Year of publication">Year</th>
                    <th>Title</th>
                    <th className="hide-on-small-only">Reference</th>
                    <th className="hide-on-med-and-down">Type</th>
                    <th></th>
                    <th className="hide-on-med-and-down"></th>
                  </tr>
                </thead>
                <tbody className="z-depth-2">
                  {this.state.texts !== null ?
                  this.state.texts.map((text, index) => {
                    return (
                    <TableRow
                      year={text.year}
                      title={text.title}
                      reference={text.reference}
                      type={text.type}
                      textProvided={text.textProvided}
                      notes={text.notes}
                      tooltipNotes={text.tooltipNotes}
                      key={index}
                      rowNumber={index}>
                    </TableRow>
                    )
                  })
                  : <tr>
                    <td>
                      Loading texts...
                    </td>
                  </tr>}
                </tbody>
              </table>}
            </div>
          </div>
        <br/>

        <div className="footer">
          <Footer/>
        </div>

      </div>
    )
  };
};

export default App;
