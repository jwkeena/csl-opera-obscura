import React from 'react';
import Tooltip from '../Tooltip';
import BottomSheetModal from '../BottomSheetModal';

function TableRow(props) {
    return (
        <tr>
            <td>{props.year}</td>
            <td>{props.type}</td>
            <td>{props.title}</td>
            <td>{props.reference}</td>
            <td>{props.textProvided !== false 
                ? <BottomSheetModal title={props.title} textProvided={props.textProvided} rowNumber={props.rowNumber}></BottomSheetModal> 
                : null}
            </td>
            <td>{props.notes !== null ? <Tooltip notes={props.notes} disabled={false}></Tooltip> : <Tooltip disabled={true}></Tooltip>}</td>
        </tr>
    )
}

export default TableRow;