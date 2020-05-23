import React, { Component } from 'react';
import M from 'materialize-css';
import FormSelectOption from '../FormSelectOption';

class FormSelect extends Component {

    componentDidMount() {
        if (this.props.multipleSelect) {

        }
        M.FormSelect.init(this.FormSelect)
    }

    getTypesChosen() {
        const typesDisplayedDropdown = document.querySelectorAll('select')[1];
        const typesChosen = M.FormSelect.init(typesDisplayedDropdown).getSelectedValues();
        console.log(typesChosen);
        this.props.updateTypesDisplayed(typesChosen);
    }

    render() {

        // Have to declare a variable here so that the attribute in the select element can use it
        // React is smart enough to ignore a falsy attribute--i.e., in the case of a false value passed to this.props.multipleSelect, no attribute will be set
        const multiple = this.props.multipleSelect;

        return (
        <div>
            <select 
                ref={ (FormSelect) => {this.FormSelect = FormSelect} }
                multiple={multiple}
                defaultValue={multiple === false ? 'Year' : this.props.optionNames} // This sets the default values 
                onChange={multiple === false ? (event) => this.props.updateSortOption(event.target.value.toLowerCase()) : () => this.getTypesChosen()}>
                {this.props.optionNames.map((optionName, index) => {
                    return (
                        <FormSelectOption
                        selected={true} 
                            optionName={optionName} 
                            key={index}>
                        </FormSelectOption>
                    )
                })}
            </select>
        </div>
        )
    }

}

export default FormSelect;