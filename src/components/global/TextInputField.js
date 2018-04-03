import React from 'react'
import Input, {InputLabel} from 'material-ui/Input';
import {FormControl, FormHelperText} from 'material-ui/Form';
import PropTypes from 'prop-types';

class TextInputField extends React.Component {

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.props.onChange(event.target.value);
    }

    render() {
        const {id, label, type, autoComplete, value, error} = this.props;
        const valid = !error;

        return <FormControl error={!valid}>
            <InputLabel required>{label}</InputLabel>
            <Input
                id={id}
                type={type}
                autoComplete={autoComplete}
                value={value}
                onChange={this.onChange}/>
            <FormHelperText>{error}</FormHelperText>
        </FormControl>
    }
}

TextInputField.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    autoComplete: PropTypes.string
};

export default TextInputField

