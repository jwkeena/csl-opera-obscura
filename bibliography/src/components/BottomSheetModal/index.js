import React, { Component } from 'react';
import M from 'materialize-css';

class BottomSheetModal extends Component {

    state = {
        modalIDHash: null,
        modalID: null
    }

    componentDidMount() {
        this.createNewModalID();
        M.Modal.init(this.modal);
    }

    createNewModalID() {
        let modalIDHash = "#modal";
        modalIDHash += this.props.rowNumber;
        let modalID = "modal";
        modalID += this.props.rowNumber;
        this.setState({"modalIDHash": modalIDHash, "modalID": modalID});
    }

    render() {
        return (
            <div>
                <a className="btn blue modal-trigger" href={this.state.modalIDHash}>read</a>
                <div 
                    ref={ (modal) => {this.modal = modal} }
                    id={this.state.modalID} 
                    className="modal bottom-sheet">
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

export default BottomSheetModal;