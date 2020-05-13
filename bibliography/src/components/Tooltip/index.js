import React, { Component } from 'react';
import M from 'materialize-css';

class Tooltip extends Component {

    componentDidMount() {
        M.Tooltip.init(this.tooltip);
    }

    render() {
        return(
            <a ref={ (tooltip) => {this.tooltip = tooltip}} className="btn tooltipped grey lighten-1" data-tooltip={this.props.notes}>...</a>
        )
    }

}

export default Tooltip;