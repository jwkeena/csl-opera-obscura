import React, { Component } from 'react';
import M from 'materialize-css';
import FormSelectOption from '../FormSelectOption';

class FormSelect extends Component {

    componentDidMount() {
        M.FormSelect.init(this.FormSelect)
    }

    render() {

        // Have to declare a variable here so that the attribute in the select element can use it
        // React is smart enough to ignore a falsy attribute--i.e., in the case of a false value passed to this.props.multipleSelect, no attribute will be set
        var multiple = this.props.multipleSelect;

        return (
        <div>
            <select 
                ref={ (FormSelect) => {this.FormSelect = FormSelect} }
                multiple={multiple}
                onChange={multiple === false ? (event) => this.props.updateSortOption(event.target.value.toLowerCase()) : (event) => this.props.updateTypesDisplayed(event.target.value)}>
                {this.props.optionNames.map((optionName, index) => {
                    return (
                        <FormSelectOption 
                            optionName={optionName} 
                            value={optionName} 
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