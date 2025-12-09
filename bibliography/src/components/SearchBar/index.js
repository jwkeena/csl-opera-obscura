import React, { Component } from 'react';
import './styles.css';

class SearchBar extends Component {
    state = {
        searchTerm: ''
    };

    handleInputChange = (e) => {
        const searchTerm = e.target.value;
        this.setState({ searchTerm });
        this.props.onSearch(searchTerm);
    };

    clearSearch = () => {
        this.setState({ searchTerm: '' });
        this.props.onSearch('');
    };

    render() {
        return (
            <div className="search-bar-container">
                <div className="input-field search-input-wrapper">
                    <i className="material-icons prefix">search</i>
                    <input
                        type="text"
                        id="text-search"
                        className="search-input"
                        placeholder="Search titles, references, and text content..."
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
