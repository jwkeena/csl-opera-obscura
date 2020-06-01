import React, { Component } from 'react';
import M from 'materialize-css';
import './styles.css';

const styles = {
    menuIcon: {
        position: "relative",
        top: "5px"
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
                    <span className="material-icons hide-on-med-and-down" style={styles.menuIcon}>menu_book</span>
                    <span className="material-icons hide-on-large-only" style={styles.menuIcon}>info</span>
                </a>
                <div 
                    ref={ (modal) => {this.modal = modal} }
                    id={this.state.modalID} 
                    className="modal modal-fixed-footer beige-background">
                    <div className="modal-content">
                        <h5>{this.props.title}</h5>
                        <div className="hide-on-large-only divider"></div>
                        <div>
                            <h5 className="hide-on-large-only center-align">Text</h5>
                            <div dangerouslySetInnerHTML={{__html: this.props.textProvided}}></div>
                        </div>
                        <div className="hide-on-large-only">
                            <h5 className="center-align">Reference</h5>
                            <div>{this.props.reference}.</div>
                        </div>
                        <div className="hide-on-large-only">
                            <h5 className="center-align">Notes</h5>
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