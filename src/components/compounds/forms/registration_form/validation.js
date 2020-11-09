// presumed nigerian phone number prefixes
const nigerian_phone_prefixes = ['070', '080', '081', '090'];

/**
 * {FormikValues} values - Formik initial values
 * @param values
 * @return {{}}
 */
export const registrationValidation = (values) => {
    const errors = {};
    // validate full name
    if (!values.full_name.trim()) {
        errors.full_name = 'full name is required!';
    } else if (values.full_name.trim().length < 3) {
        errors.full_name = 'name is too short';
    } else if (values.full_name.trim().split(' ').length < 2) {
        errors.full_name = 'enter last name';
    } else if (values.full_name.trim().split(' ').length >= 2) {
        const [first_name, last_name] = values.full_name.trim().split(' ');
        if (first_name.length < 3) errors.full_name = 'first name is too short';
        if (last_name.length < 3) errors.full_name = 'last name is too short';
    }

    // validate email
    if (!values.email) errors.email = 'required!';
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) errors.email = 'invalid email';

    // validate phone number
    if (!values.phone_number) errors.phone_number = 'enter your phone number!';
    else if (values.phone_number) {
        const start_number = values.phone_number.slice(0, 3);
        if (!nigerian_phone_prefixes.includes(start_number)) errors.phone_number = 'nigerian numbers only!';
    }

    // validate password
    if (!values.password) {
        errors.password = 'required!';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&].{6,}$/i.test(values.password)) {
        errors.password =
            'password should be minimum of six characters, must contain at least one uppercase character, one number, and a special character';
    }

    if (!values.confirm_password) {
        errors.confirm_password = 'enter password again.';
    } else if (values.password !== values.confirm_password) {
        errors.confirm_password = 'password do not match.';
    }

    // validate card
    if (!values.card) {
        errors.card = 'enter card number';
    } else if (values.card.replace(/ /g, '').length < 16) {
        errors.card = 'invalid card!';
    } else if (!Number(values.card.replace(/ /g, ''))) {
        errors.card = 'invalid card! expecting numbers only';
    }

    // validate exp_date
    if (!values.exp_date) {
        errors.exp_date = 'date is required';
    } else if (values.exp_date.length < 5) {
        errors.exp_date = 'date should be MM/YY format';
    } else if (!Number(values.exp_date.replace(/\//g, ''))) {
        errors.exp_date = 'invalid, numbers only!';
    }

    // validate pin
    if (!values.pin) {
        errors.pin = 'required!';
    } else if (!Number(values.pin) || values.pin.length !== 4) {
        errors.pin = 'pin not recognized';
    }

    return errors;
};
