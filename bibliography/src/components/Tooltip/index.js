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
        M.Tooltip.init(this.tooltip, {html: true, margin: 5});
    }

    render() {
        if (this.props.footer) {
            return (
                <a 
                    ref={ (tooltip) => {this.tooltip = tooltip}} 
                    href="https://jwkeena.github.io/csl-letters/"
                    target="_blank"
                    className="tooltipped"
                    data-position="top" 
                    data-tooltip={"<img src='https://jwkeena.github.io/images/csl-demo.gif'/>"}>
                        C.S. Lewis Letter Search
                </a>
            )
        }
        
        if (!this.props.disabled) {
            return (
                <a 
                    ref={ (tooltip) => {this.tooltip = tooltip}} 
                    href="#!"
                    className="btn tooltipped grey"
                    data-position="top" 
                    data-tooltip={this.props.notes}>
                    <span className="material-icons left-align" style={styles.activeTooltip}>more_horiz</span>
                </a>
            )
        } 
        
        if (this.props.disabled) {
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