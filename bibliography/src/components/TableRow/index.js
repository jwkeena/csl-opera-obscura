import React from 'react';
import Tooltip from '../Tooltip';
import Modal from '../Modal';

function TableRow(props) {
    return (
        <tr>
            <td>{props.year}</td>
            <td>{props.type}</td>
            <td>{props.title}</td>
            <td>{props.reference}</td>
            <td>{props.textProvided !== false 
                ? <Modal title={props.title} textProvided={props.textProvided} rowNumber={props.rowNumber}></Modal> 
                : null}
            </td>
            <td>{props.notes !== null ? <Tooltip notes={props.notes} disabled={false}></Tooltip> : <Tooltip disabled={true}></Tooltip>}</td>
        </tr>
    )
}

export default TableRow;