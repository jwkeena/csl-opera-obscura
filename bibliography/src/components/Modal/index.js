import React, { Component } from 'react';
import M from 'materialize-css';

const styles = {
    menuIcon: {
        position: "relative",
        top: "4px"
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
                <a className="btn blue modal-trigger" href={this.state.modalIDHash}><span className="material-icons" style={styles.menuIcon}>menu_book</span></a>
                <div 
                    ref={ (modal) => {this.modal = modal} }
                    id={this.state.modalID} 
                    className="modal modal-fixed-footer">
                    <div className="modal-content">
                        <h5>{this.props.title}</h5>
                        <p>{this.props.textProvided}</p>
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