import React from 'react';
import Tooltip from '../Tooltip';
import Modal from '../Modal';

const styles = {
    prose: {
        backgroundColor: "#EDE7D3",
        color: "black"
    },
    poem: {
        backgroundColor: "#DED8C5",
        color: "black"
    },
    diary: {
        backgroundColor: "#DEDDCA",
        color: "black"
    }
}

function TableRow(props) {
    return (
        <tr style={props.type === "prose" ? styles.prose : props.type === "poem" ? styles.poem : styles.diary}>
            <td className="center-align">{props.year}</td>
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