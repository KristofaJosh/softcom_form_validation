import React from 'react';
import './button.style.css';

const Button = ({ text, loading, ...props }) => {
    return (
        <div className={'Button'}>
            <button className={'Button__button'} {...props}>
                <div className={'Button__button--inner'}>
                    <div className={'Button__button--inner-text'}>{text}</div>
                    {loading && <div className={'loader'}/>}
                </div>
            </button>
        </div>
    );
};

export default Button;
