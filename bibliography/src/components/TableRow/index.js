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
            <td>{props.notes ? <Tooltip notes={props.notes}></Tooltip> : null}</td>
        </tr>
    )
}

export default TableRow;