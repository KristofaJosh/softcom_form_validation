import React from 'react';
import './typography.style.css';

export const Heading3 = ({ children, ...props }) => {
    return <h3 {...props}>{children}</h3>;
};
export const Text = ({ children, ...props }) => {
    return <p {...props}>{children}</p>;
};
export const SmallText = ({ children, ...props }) => {
    return <small {...props}>{children}</small>;
};
export const TinyText = ({ children, ...props }) => {
    return (
        <p style={{ fontSize: '9px' }} {...props}>
            {children}
        </p>
    );
};
