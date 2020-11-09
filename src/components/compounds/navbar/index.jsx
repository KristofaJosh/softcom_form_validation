import React, { useContext } from "react";
import './navbar.style.css';
import AuthContext from "../../../context";

const NavBar = () => {
   const { state } = useContext(AuthContext);

    return (
        <div className={'Navbar'}>
            <div className="container">
                <div className="Navbar__logo">
                    <img src="/assets/images/comp_logo.png" alt="softcom company logo" />
                </div>
                <div>
                    {state.hasRegistered && (
                        <p style={{ textTransform: 'capitalize' }}>
                            Hello!, {' '}
                            <span style={{ fontWeight: 'bolder' }}>{state.user.full_name}</span>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
