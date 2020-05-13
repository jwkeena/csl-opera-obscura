import React, { Component } from 'react';
import M from 'materialize-css';
import './styles.css';

const styles = {
    tooltip: {
        position: "relative",
        top: "8px",
    }
}
class Tooltip extends Component {

    componentDidMount() {
        M.Tooltip.init(this.tooltip, {html: true});
    }

    render() {
        return(
            <a ref={ (tooltip) => {this.tooltip = tooltip}} className="btn tooltipped grey lighten-1" data-position="left" data-tooltip={this.props.notes}><span className="material-icons left-align" style={styles.tooltip}>
            more_horiz
            </span></a>
        )
    }

}

export default Tooltip;