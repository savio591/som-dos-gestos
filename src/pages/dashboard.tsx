import React from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";
import "../styles/pages/dashboard.css";
import settings_icon from "../images/settings.svg";
import search_icon from "../images/search.svg";

import foto1 from "../images/foto1.png"

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
                    <div className="lista_left">
                        <div className="lista_l1">
                            <div className="foto">
                                <img src={foto1} alt="avatar" />
                            </div>
                        </div>
                        <div className="lista_l2">
                            <p>Laura</p>
                            <p>1349pts.</p>
                        </div>
                    </div>
                    <div className="lista_right">
                        <div className="lista_r1">
                            <p>Nv. 12</p>
                        </div>
                        <div className="lista_r2">
                            <p>1º Lugar</p>
                        </div>
                    </div>
                </div>

                <div className="lista">
                    <div className="lista_left">
                        <div className="lista_l1">
                            <div className="foto">
                                <img src={foto1} alt="avatar" />
                            </div>
                        </div>
                        <div className="lista_l2">
                            <p>Stephanie</p>
                            <p>1291pts.</p>
                        </div>
                    </div>
                    <div className="lista_right">
                        <div className="lista_r1">
                            <p>Nv. 12</p>
                        </div>
                        <div className="lista_r2">
                            <p>2º Lugar</p>
                        </div>
                    </div>
                </div>

            </div>

      </div>

      <div className="rodape">
        <div className="rdp_1">
            <p>Aprender</p>
        </div>
        <div className="rdp_2">
            <p>Desafiar</p>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;