import React from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";
import "../styles/pages/dashboard.css";
import settings_icon from "../images/settings.svg";
import search_icon from "../images/search.svg";

function Dashboard() {
  return (
    <div id="container">
      <div className="abas">
        <div className="flex_abas">
            <div className="btn_abas btn_abas_selected">
                    <Link to="/dashboard">
                <p>Melhores da Semana</p>
                    </Link>
            </div>
            <div className="btn_abas">
                <Link to="/dashboard">
                    <p>Amigos</p>
                </Link>
            </div>
        </div>
        <div className="btn_config">
                    <Link to="/dashboard">
           <img src={settings_icon} alt="configs" />
            </Link>
        </div>
      </div>
      <div className="corpo">
          <div className="corpo_header">
            <h2>Ranking - Melhores da Semana</h2>
            <div className="corpo_pesquisa">
                <Link to="/dashboard">
                    <img src={search_icon} alt="configs" />
                </Link>
            </div>
          </div>

            <div className="listas">
            
                <div className="lista">
                    <p>Resolve</p>
                </div>

            </div>

      </div>



    </div>
  );
}

export default Dashboard;