import React, { Component } from 'react';
import M from 'materialize-css';
import './styles.css';

const styles = {
    bookIcon: {
        position: "relative",
        top: "4px"
    }, 
    infoIcon: {
        position: "relative",
        top: "6px"
    }
}

class Modal extends Component {

    state = {
        modalIDHash: null,
        modalID: null
    }

    componentDidMount() {
        this.createNewModalID();
    }

    createNewModalID() {
        let modalIDHash = "#modal";
        modalIDHash += this.props.rowNumber;
        let modalID = "modal";
        modalID += this.props.rowNumber;
        this.setState({"modalIDHash": modalIDHash, "modalID": modalID}, () => M.Modal.init(this.modal)); // Initializing modal after setState ensures it will be initialized with the right ids in place
    }

    render() {
        return (
            <div>
                <a className="btn modal-trigger dark-blue" href={this.state.modalIDHash}>
                    <span className="material-icons hide-on-med-and-down" style={styles.bookIcon}>menu_book</span>
                    <span className="material-icons hide-on-large-only" style={styles.infoIcon}>info</span>
                </a>
                <div 
                    ref={ (modal) => {this.modal = modal} }
                    id={this.state.modalID} 
                    className="modal modal-fixed-footer beige-background">
                    <div className="modal-content">
                        <h5 className="show-on-large hide-on-med-and-down left-align">{this.props.title}</h5>
                        <h6 className="hide-on-med-and-up">{this.props.title}</h6>
                        <div className="hide-on-large-only divider"></div>
                        <div>
                            <h6 className="hide-on-large-only left-align">Text</h6>
                            <div dangerouslySetInnerHTML={{__html: this.props.textProvided}}></div>
                        </div>
                        <div className="hide-on-med-and-up">
                            <h6 className="left-align">Reference</h6>
                            <div dangerouslySetInnerHTML={{__html: this.props.reference + "."}}></div>
                        </div>
                        <div className="hide-on-large-only">
                            <h6 className="left-align">Notes</h6>
                            <div dangerouslySetInnerHTML={{__html: this.props.notes}}></div>
                        </div>
                    </div>
                        <div className="modal-footer">
                        <a href="#!" className="modal-close btn-flat">close</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;