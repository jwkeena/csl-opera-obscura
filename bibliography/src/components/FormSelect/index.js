import React, { Component } from 'react';
import M from 'materialize-css';
import FormSelectOption from '../FormSelectOption';

class FormSelect extends Component {

    componentDidMount() {
        M.FormSelect.init(this.FormSelect, {
            dropdownOptions: {
                onCloseEnd: () => this.updateDisplayText()
            }
        });
        this.updateDisplayText();
    }

    componentDidUpdate() {
        // Re-check and update display text after any component update
        if (this.props.multipleSelect) {
            this.updateDisplayText();
        }
    }

    updateDisplayText() {
        if (this.props.multipleSelect) {
            const instance = M.FormSelect.getInstance(this.FormSelect);
            if (instance) {
                const selectedValues = instance.getSelectedValues();
                const allSelected = selectedValues.length === this.props.optionNames.length;
                if (allSelected) {
                    const input = this.FormSelect.parentElement.querySelector('input.select-dropdown');
                    if (input) {
                        input.value = 'All Types';
                    }
                }
            }
        }
    }

    getTypesChosen() {
        const instance = M.FormSelect.getInstance(this.FormSelect);
        if (instance) {
            const typesChosen = instance.getSelectedValues();
            this.props.updateTypesDisplayed(typesChosen);

            // Update display text after selection changes
            setTimeout(() => {
                const allSelected = typesChosen.length === this.props.optionNames.length;
                const input = this.FormSelect.parentElement.querySelector('input.select-dropdown');
                if (input && allSelected) {
                    input.value = 'All Types';
                }
            }, 0);
        }
    }

    render() {

        // Have to declare a variable here so that the attribute in the select element can use it
        // React is smart enough to ignore a falsy attribute--i.e., in the case of a false value passed to this.props.multipleSelect, no attribute will be set
        const multiple = this.props.multipleSelect;

        return (
        <div className="libre-baskerville">
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