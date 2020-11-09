import React from 'react';
import './footer.style.css';
import { Typography } from '../../elements/typography';

const { Heading3, Text, SmallText, TinyText } = Typography;

const Footer = () => {
    return (
        <div className={'Footer'}>
            <div className="container">
                <div className={''}>
                    <div>
                        <Heading3>Softcom</Heading3>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, quod?</Text>
                    </div>
                    <div>
                        <SmallText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ipsa sed voluptatem.
                        </SmallText>
                        <TinyText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex natus sapiente soluta suscipit
                            voluptate! Aliquid autem, consectetur cumque explicabo facere fuga id illum iure iusto
                            mollitia neque nisi nulla odit quaerat quo quos sed sequi similique sit ullam veniam vero
                            vitae voluptates! Doloremque, nisi, quia.
                        </TinyText>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
