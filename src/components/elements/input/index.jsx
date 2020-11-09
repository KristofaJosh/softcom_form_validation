import React, { useRef } from 'react';
import './input.style.css';
import { Typography } from '../typography';
import { ReactComponent as EyeIcon } from './eye.svg';

const Input = ({ label, error, ...props }) => {
    const inputRef = useRef(null);

    const toggleReveal = () => {
        const currentType = inputRef.current.type;
        currentType === 'text' ? (inputRef.current.type = 'password') : (inputRef.current.type = 'text');
    };

    return (
        <div className={'Input'}>
            <label htmlFor={props.name} className={'Input__label'}>
                {label}
            </label>
            <span className={'Input__input--password-reveal'}>
                <input ref={inputRef} type="text" className={'Input__input_input'} id={props.name} {...props} />
                {props.type === 'password' && props.canReveal && (
                    <EyeIcon className={'Input__input--password-reveal-icon'} onClick={toggleReveal} />
                )}
            </span>
            <div className={'Input__error'}>
                <Typography.TinyText>{error}</Typography.TinyText>
            </div>
        </div>
    );
};

export default Input;
