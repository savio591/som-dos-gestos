import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import '../styles/pages/login.css';

function Login() {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={logo} alt="CNT" className="logo" />

                <Link to="/dashboard" className="enter-app">
                <p>Entrar</p>
                </Link>
            </div>
        </div>

    );
}

export default Login;