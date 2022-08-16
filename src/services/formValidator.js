const validateForm = (formFields, formValidators, value = null) => {
  const errors = {};
  for (const field in formValidators) {
    const fieldValidators = formValidators[field];

    validate: for (let i = 0; i < fieldValidators.length; i++) {
      const validate = fieldValidators[i];
      const processValue = value !== null ? value : formFields[field];
      let result = validate(processValue);

      if (!result.valid) {
        errors[field] = result.message;
        /*eslint-disable-next-line*/
        break validate;
      }
    }
  }

  return errors;
};

export default validateForm;
