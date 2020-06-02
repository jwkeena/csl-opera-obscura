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
    linkIcon: {
        position: "relative",
        top: "6px"
    }
}

function TableRow(props) {
    return (
        <tr style={props.type === "Prose" ? styles.prose : props.type === "Poem" ? styles.poem : props.type === "Diary" ? styles.diary : styles.letter}>
            <td className="center-align">&nbsp;&nbsp;{props.year}&nbsp;&nbsp;</td>
            <td dangerouslySetInnerHTML={{__html: props.title}}></td>
            <td className="hide-on-small-only" dangerouslySetInnerHTML={{__html: props.reference}}></td>
            <td className="hide-on-med-and-down">{props.type}</td>
            <td>{props.textProvided !== false 

                ? props.textProvided.startsWith("http") 
                
                    ? <div>
                        <a href={props.textProvided} target='_blank' rel='noopener noreferrer' className='btn dark-blue hide-on-med-and-down'>
                            <span className="material-icons" style={styles.linkIcon}>link</span>
                        </a>
                        <div className="hide-on-large-only">
                            <Modal title={props.title} textProvided={"<div class='left-align'><a href='" + props.textProvided + "' target='blank' rel='noopener noreferrer' class='link-to-text'>Available online.</div>"} reference={props.reference} rowNumber={props.rowNumber} notes={props.notes !== null ? props.notes : "No notes for this item."}></Modal>
                        </div>
                    </div>
                    
                    : <Modal title={props.title} textProvided={props.textProvided} rowNumber={props.rowNumber} notes={props.notes} reference={props.reference}></Modal> 
                
                : <div className="hide-on-large-only"><Modal title={props.title} textProvided={"<div class='left-align'>[Not provided.]</div>"} reference={props.reference} rowNumber={props.rowNumber} notes={props.notes !== null ? props.notes : "No notes for this item."}></Modal></div>
                
                
                }
            </td>
            <td className="hide-on-med-and-down">{props.tooltipNotes !== null ? <Tooltip tooltipNotes={props.tooltipNotes} disabled={false}></Tooltip> : <Tooltip disabled={true}></Tooltip>}</td>
        </tr>
    )
}

export default TableRow;