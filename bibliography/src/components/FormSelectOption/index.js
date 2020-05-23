import React from 'react';

function FormSelectOption(props) {
    return (
        <option 
            value={props.optionName}>
                {props.optionName}
        </option>
    )
}

export default FormSelectOption;