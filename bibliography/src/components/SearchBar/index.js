import React, { Component } from 'react';
import M from 'materialize-css';
import './styles.css';

class SearchBar extends Component {
    state = {
        searchTerm: '',
        searchField: 'all'
    };

    debounceTimer = null;

    componentDidMount() {
        M.FormSelect.init(this.fieldSelect);
    }

    componentDidUpdate() {
        M.FormSelect.init(this.fieldSelect);
    }

    componentWillUnmount() {
        // Clean up timer on unmount
        if (this.debounceTimer) {
            clearTimeout(this.debounceTimer);
        }
    }

    handleInputChange = (e) => {
        const searchTerm = e.target.value;
        this.setState({ searchTerm });

        // Debounce the search - wait 250ms after user stops typing
        if (this.debounceTimer) {
            clearTimeout(this.debounceTimer);
        }
        this.debounceTimer = setTimeout(() => {
            this.props.onSearch(searchTerm, this.state.searchField);
        }, 250);
    };

    handleFieldChange = (e) => {
        const searchField = e.target.value;
        this.setState({ searchField });
        if (this.state.searchTerm) {
            this.props.onSearch(this.state.searchTerm, searchField);
        }
    };

    clearSearch = () => {
        // Cancel any pending debounced search
        if (this.debounceTimer) {
            clearTimeout(this.debounceTimer);
        }
        this.setState({ searchTerm: '' });
        this.props.onSearch('', this.state.searchField);
    };

    getPlaceholder = () => {
        const placeholders = {
            all: 'Search titles, references, and text content',
            title: 'Search titles',
            reference: 'Search references',
            textProvided: 'Search text content'
        };
        return placeholders[this.state.searchField];
    };

    render() {
        return (
            <div className="search-bar-container">
                <div className="search-row">
                    <div className="input-field search-input-wrapper">
                        <svg className="search-icon prefix" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="#574D37" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                            </svg>
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
