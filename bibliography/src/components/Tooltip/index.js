import React, { Component } from 'react';
import M from 'materialize-css';
import './styles.css';

const styles = {
    activeTooltip: {
        position: "relative",
        top: "8px",
    },
    disabledTooltip: {
        position: "relative",
        top: "6px"
    }
}
class Tooltip extends Component {

    componentDidMount() {
        M.Tooltip.init(this.tooltip, {html: true});
    }

    render() {
        if (!this.props.disabled) {
            return (
                <a 
                    ref={ (tooltip) => {this.tooltip = tooltip}} 
                    href="#!"
                    className="btn tooltipped grey"
                    data-position="bottom" 
                    data-tooltip={this.props.notes}>
                    <span className="material-icons left-align" style={styles.activeTooltip}>more_horiz</span>
                </a>
            )
        } else if (this.props.disabled === true) {
            return (
                <a 
                    ref={ (tooltip) => {this.tooltip = tooltip}}
                    href="#!"
                    className="btn disabled"
                >
                    <span className="material-icons" style={styles.disabledTooltip}>block</span>
                </a>
            )
        }
    }

}

export default Tooltip;