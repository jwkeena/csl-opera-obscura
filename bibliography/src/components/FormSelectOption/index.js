import React from 'react';

function FormSelectOption(props) {
    return (
        <option value={props.value}>{props.optionName}</option>
    )
}

export default FormSelectOption;