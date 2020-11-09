import React, { useContext } from 'react';
import Input from '../../../elements/input';
import Button from '../../../elements/button';
import { useFormik } from 'formik';
import { registrationValidation } from './validation';
// import { cardValueFormatter } from '../../../../utils/card_formatter';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../../../context';
import Card from '../../../elements/card';
import { Typography } from '../../../elements/typography';
import './reg_form.style.css';

const RegistrationForm = () => {
    const { dispatch } = useContext(AuthContext);
    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            full_name: '',
            email: '',
            phone_number: '',
            password: '',
            confirm_password: '',
            card: '',
            exp_date: '',
            pin: '',
        },
        validate: registrationValidation,
        onSubmit: (values, { setSubmitting }) => {
            // simulate the api call
            setTimeout(() => {
                setSubmitting(false); // stop loading - isSubmitting
                dispatch({ type: 'AUTH_USER', payload: { full_name: values.full_name } }); // change hasRegistered in App.js to true - simulate success registration
                history.push('/');
            }, 3000);
        },
    });

    const handleDateInput = (event) => {
        let value = event.target.value.replace(/\//g, '');
        let M = '00';
        let Y: '00';
        if (value.length > 2) {
            M = value.slice(0, 2);
            Y = value.slice(2, 4);
            if (!(Number(M) > 12 || Number(M) < 1)) {
                const new_value = M + '/' + Y;
                formik.handleChange({ target: { name: event.target.name, value: new_value } });
            } else {
                formik.setErrors({ ...formik.errors, exp_date: 'invalid month, month is 01 - 12' });
            }
        }
        if (value.length < 4) {
            formik.handleChange({ target: { name: event.target.name, value: value } });
        }
    };

    const handleCardInput = (event) => {
        const value = event.target.value.replace(/ /g, ''); //remove spaces while entering value
        const new_value = value.toString().replace(/\d{4}(?=.)/g, '$& ');
        if (value.length <= 16) {
            formik.handleChange({ target: { name: event.target.name, value: new_value } });
        }
    };

    return (
        <div>
            <Card>
                <Typography.Heading3 style={{ marginBottom: '10px' }}>Registration Form</Typography.Heading3>
                <form onSubmit={formik.handleSubmit}>
                    <Input
                        style={{ textTransform: 'capitalize' }}
                        label={'Full Name'}
                        name={'full_name'}
                        placeholder={'Full Name'}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.full_name}
                        error={formik.errors.full_name && formik.touched.full_name && formik.errors.full_name}
                    />
                    <Input
                        label={'Email'}
                        name={'email'}
                        type={'email'}
                        placeholder={'christopherjoshua@example.com'}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        error={formik.errors.email && formik.touched.email && formik.errors.email}
                    />
                    <Input
                        label={'phone number'}
                        name={'phone_number'}
                        placeholder={'07012345678'}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone_number}
                        error={formik.errors.phone_number && formik.touched.phone_number && formik.errors.phone_number}
                    />
                    <div className={'password-section'}>
                        <Input
                            label={'password'}
                            canReveal
                            name={'password'}
                            type={'password'}
                            placeholder={'Password'}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            error={formik.errors.password && formik.touched.password && formik.errors.password}
                        />
                        <Input
                            label={'confirm password'}
                            name={'confirm_password'}
                            type={'password'}
                            placeholder={'Confirm password'}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.confirm_password}
                            error={
                                formik.errors.confirm_password &&
                                formik.touched.confirm_password &&
                                formik.errors.confirm_password
                            }
                        />
                    </div>
                    <div className={'card-section'}>
                        <Input
                            label={'credit/debit card'}
                            name={'card'}
                            placeholder={'XXXX XXXX XXXX XXXX'}
                            onChange={handleCardInput}
                            onBlur={formik.handleBlur}
                            value={formik.values.card}
                            error={formik.errors.card && formik.touched.card && formik.errors.card}
                        />
                        <Input
                            label={'expiration date'}
                            name={'exp_date'}
                            placeholder={'MM/YY'}
                            onBlur={formik.handleBlur}
                            onChange={handleDateInput}
                            value={formik.values.exp_date}
                            error={formik.errors.exp_date && formik.touched.exp_date && formik.errors.exp_date}
                        />
                        <Input
                            label={'card pin'}
                            name={'pin'}
                            canReveal
                            type={'password'}
                            placeholder={'1234'}
                            onChange={(event) => {
                                const value = event.target.value;
                                if (value.length < 5) {
                                    formik.handleChange(event);
                                }
                            }}
                            onBlur={formik.handleBlur}
                            value={formik.values.pin}
                            error={formik.errors.pin && formik.touched.pin && formik.errors.pin}
                        />
                    </div>
                    <Button text={'submit'} disabled={formik.isSubmitting} loading={formik.isSubmitting} />
                </form>
            </Card>
        </div>
    );
};

export default RegistrationForm;
