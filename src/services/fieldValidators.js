const isString = (str) => typeof str === 'string';

function number(message = 'Value is invalid') {
    return (value) => {
        const valid = /^\d*\.?\d*$/.test(value);

        if (!valid) {
            return {
                valid,
                message,
            };
        }

        return { valid };
    };
}

function required(message = 'This field is required.') {
    return (value) => {
        const valid = isString(value) ? value.trim() !== '' : !!value;

        if (!valid) {
            return {
                valid,
                message,
            };
        }

        return { valid };
    };
}

const validators = {
    number,
    required,
}

export default validators;
