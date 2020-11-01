import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo_complete.png";
import "../styles/global.css";
import "../styles/pages/login.css";

function Login() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logo} alt="logo" className="logo" />

        <div>
          <h3 className="texto">
            Sintonizando música e tecnologia para transformar a vida
          </h3>
        </div>
        <div className="buttons">
          <Link to="/dashboard" className="enter-app fb">
            <p>Entrar com Facebook</p>
          </Link>

          <Link to="/dashboard" className="enter-app sp">
            <p>Entrar com Spotify</p>
          </Link>

          <Link to="/dashboard" className="enter-app em">
            <p>Entrar com E-mail</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
