import React from 'react';
import Tooltip from '../Tooltip';
import Modal from '../Modal';

const styles = {
    prose: {
        backgroundColor: "#EDE7D3",
        color: "black"
    },
    letter: {
        backgroundColor: "#F0EFDD",
        color: "black"
    },
    diary: {
        backgroundColor: "#DEDDCA",
        color: "black"
    }, 
    poem: {
        backgroundColor: "#DED8C5",
        color: "black"
    },
}

function TableRow(props) {
    return (
        <tr style={props.type === "Prose" ? styles.prose : props.type === "Poem" ? styles.poem : props.type === "Diary" ? styles.diary : styles.letter}>
            <td className="center-align">&nbsp;&nbsp;{props.year}&nbsp;&nbsp;</td>
            <td>{props.title}</td>
            <td className="hide-on-small-only">{props.reference}</td>
            <td className="hide-on-med-and-down">{props.type}</td>
            <td>{props.textProvided !== false 
                ? <Modal title={props.title} textProvided={props.textProvided} rowNumber={props.rowNumber}></Modal> 
                : null}
            </td>
            <td className="hide-on-small-only">{props.notes !== null ? <Tooltip notes={props.notes} disabled={false}></Tooltip> : <Tooltip disabled={true}></Tooltip>}</td>
        </tr>
    )
}

export default TableRow;