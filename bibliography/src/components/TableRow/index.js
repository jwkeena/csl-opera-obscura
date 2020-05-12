import React from 'react';

function TableRow(props) {
    return (
        <tr>
            <td>{props.year}</td>
            <td>{props.type}</td>
        </tr>
    )
}

export default TableRow;