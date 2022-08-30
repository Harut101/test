import { useState, useCallback, useRef } from 'react';
import validateForm from '../services/formValidator';

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

const useForm = (schema, submitHandler) => {
    const [formFields, setFormFields] = useState({ ...schema.initialValues });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const fieldRefs = useRef({});

    const onSubmit = (e) => {
        e.preventDefault();

        setSubmitted(true);

        let errors = validateForm(formFields, schema.validators);

        setErrors(errors);

        if (isEmpty(errors)) {
            submitHandler(formFields);
        }
    };

    const onChange = useCallback(
        (e) => {
            e.preventDefault();

            const { name, value } = e.target;

            if (submitted) {
                const validated = validateForm(formFields, { [name]: schema.validators[name] }, value);
                const errorsClone = { ...errors };

                if (isEmpty(validated)) {
                    delete errorsClone[name];
                }

                setErrors({ ...errorsClone, ...validated });
            }

            setFormFields({ ...formFields, [name]: value });
        },
        [formFields, submitted, errors, schema]
    );

    const setValue = (name, value) => {
        setTimeout(() => {
            fieldRefs.current[`${name}Ref`].current.value = value;
            setFormFields({ ...formFields, [name]: value });
        }, 300);
    };

    const getValue = (name) => formFields[name];

    const register = (name) => {
        /* eslint-disable */
        const fieldRef = useRef();

        fieldRefs.current[`${name}Ref`] = fieldRef;

        return {
            name,
            ref: fieldRef,
            onChange,
        };
    };

    return {
        errors,
        submitted,
        register,
        onSubmit,
        setValue,
        getValue,
    };
};

export default useForm;
