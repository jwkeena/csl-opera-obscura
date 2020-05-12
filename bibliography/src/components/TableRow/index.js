import React from 'react';

function TableRow(props) {
    return (
        <tr>
            <td>{props.year}</td>
            <td>{props.type}</td>
            <td>{props.title}</td>
            <td>{props.reference}</td>
            <td>{props.textProvided}</td>
            <td>{props.notes}</td>
        </tr>
    )
}

export default TableRow;