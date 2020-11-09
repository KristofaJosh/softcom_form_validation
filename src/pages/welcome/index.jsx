import React from 'react';
import { Typography } from '../../components/elements/typography';

const Home = () => {
    return (
        <div className={'Home'}>
            <div className={'container'}>
                <div style={{ padding: '1rem' }}>
                    <Typography.Heading3>Welcome to Softcom</Typography.Heading3>
                </div>
            </div>
        </div>
    );
};

export default Home;
