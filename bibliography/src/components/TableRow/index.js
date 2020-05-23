import React from 'react';
import Tooltip from '../Tooltip';
import Modal from '../Modal';

const styles = {
    prose: {
        backgroundColor: "#EDE7D3",
        color: "black"
    },
    poem: {
        backgroundColor: "#CCC7B6",
        color: "black"
    },
    diary: {
        backgroundColor: "#F2E7B8",
        color: "black"
    }
}

// className={props.type === "prose" ? "light-blue lighten-5" : props.type === "poem" ? "teal lighten-5" : "amber lighten-5"} 

function TableRow(props) {
    return (
        <tr style={props.type === "prose" ? styles.prose : props.type === "poem" ? styles.poem : styles.diary}>
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