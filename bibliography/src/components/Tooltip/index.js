import React, { Component } from 'react';
import M from 'materialize-css';
import './styles.css';

const styles = {
    activeTooltip: {
        position: "relative",
        top: "8px",
    },
    disabledIcon: {
        position: "relative",
        top: "6px"
    },
    hidden: {
        display: "none"
    }
}
class Tooltip extends Component {

    componentDidMount() {
        M.Tooltip.init(this.tooltip, {html: true, margin: 5});
    };

    state = {
        imageStatus: "loading"
    };

    handleImageLoaded() {
        this.setState({imageStatus: "loaded"})
    };

    render() {
        if (this.props.footer) {
            return (
                    <a 
                        ref={ (tooltip) => {this.tooltip = tooltip}} 
                        href="https://jwkeena.github.io/csl-letters/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tooltipped"
                        data-position="top" 
                        data-tooltip={this.state.imageStatus === "loaded" ? '<img src="https://jwkeena.github.io/assets/images/csl-demo.gif">' : '<div style="height: 338px; width: 450px;"><div class="preloader-wrapper big active center-loader"><div class="spinner-layer spinner-blue-only"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div></div>'}>
                            C.S. Lewis Letter Search
                            <img src="https://jwkeena.github.io/assets/images/csl-demo.gif" alt="hidden" onLoad={this.handleImageLoaded.bind(this)} style={styles.hidden}/>
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
                    data-tooltip={this.props.tooltipNotes}>
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
                    <span className="material-icons" style={styles.disabledIcon}>block</span>
                </a>
            )
        }
    }

}

export default Tooltip;