import React, { Component } from 'react';
import M from 'materialize-css';
import './styles.css';

class SearchBar extends Component {
    state = {
        searchTerm: '',
        searchField: 'all'
    };

    componentDidMount() {
        M.FormSelect.init(this.fieldSelect);
    }

    componentDidUpdate() {
        M.FormSelect.init(this.fieldSelect);
    }

    handleInputChange = (e) => {
        const searchTerm = e.target.value;
        this.setState({ searchTerm });
        this.props.onSearch(searchTerm, this.state.searchField);
    };

    handleFieldChange = (e) => {
        const searchField = e.target.value;
        this.setState({ searchField });
        if (this.state.searchTerm) {
            this.props.onSearch(this.state.searchTerm, searchField);
        }
    };

    clearSearch = () => {
        this.setState({ searchTerm: '' });
        this.props.onSearch('', this.state.searchField);
    };

    getPlaceholder = () => {
        const placeholders = {
            all: 'Search titles, references, and text content...',
            title: 'Search titles...',
            reference: 'Search references...',
            textProvided: 'Search text content...'
        };
        return placeholders[this.state.searchField];
    };

    render() {
        return (
            <div className="search-bar-container">
                <div className="search-row">
                    <div className="input-field search-input-wrapper">
                        <i className="material-icons prefix">search</i>
                        <input
                            type="text"
                            id="text-search"
                            className="search-input"
                            placeholder={this.getPlaceholder()}
                            value={this.state.searchTerm}
                            onChange={this.handleInputChange}
                        />
                        {this.state.searchTerm && (
                            <i
                                className="material-icons clear-icon"
                                onClick={this.clearSearch}
                                title="Clear search"
                            >
                                close
                            </i>
                        )}
                    </div>
                    <div className="input-field search-field-select libre-baskerville">
                        <select
                            ref={(el) => { this.fieldSelect = el; }}
                            value={this.state.searchField}
                            onChange={this.handleFieldChange}
                        >
                            <option value="all">All Fields</option>
                            <option value="textProvided">Text Content</option>
                            <option value="reference">References</option>
                            <option value="title">Titles</option>
                        </select>
                    </div>
                </div>
                {this.props.searchResultCount !== null && this.state.searchTerm && (
                    <p className="search-results-count">
                        {this.props.searchResultCount} {this.props.searchResultCount === 1 ? 'result' : 'results'} found
                    </p>
                )}
            </div>
        );
    }
}

export default SearchBar;
