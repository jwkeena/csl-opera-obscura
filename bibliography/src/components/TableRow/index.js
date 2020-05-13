import React from 'react';
import Tooltip from '../Tooltip';

function TableRow(props) {
    return (
        <tr>
            <td>{props.year}</td>
            <td>{props.type}</td>
            <td>{props.title}</td>
            <td>{props.reference}</td>
            <td>{props.textProvided}</td>
            <td>{props.notes !== null ? <Tooltip notes={props.notes} disabled={false}></Tooltip> : <Tooltip disabled={true}></Tooltip>}</td>
        </tr>
    )
}

export default TableRow;