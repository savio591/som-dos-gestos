import React from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";
import "../styles/pages/musicas.css";
import settings_icon from "../images/settings.svg";
import search_icon from "../images/search.svg";
import back from "../images/back.svg";


import play_icon from "../images/play.svg"

function Musicas() {
  return (
    <div id="container">
      <div className="abas">
        <div className="flex_abas">
            <div className="voltar">
                <Link to="/dashboard">
                    <img src={back} alt="back_icon" />
                </Link>
            </div>
            <div className="btn_abas btn_abas_selected">
                    <Link to="/musicas/trending">
                <p>Mais acessadas</p>
                    </Link>
            </div>
            <div className="btn_abas">
                <Link to="/musicas/recentes">
                    <p>Novos</p>
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
            <h2>Músicas - Mais acessadas</h2>
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
                            <Link to="/karaoke">
                                <div className="foto">
                                    <img src={play_icon} alt="avatar" />
                                </div>
                            </Link>
                        </div>
                        <div className="lista_l2">
                            <p>Musica #1</p>
                            <p>Artista</p>
                        </div>
                    </div>
                   {/*} <div className="lista_right">
                        <div className="lista_r1">
                            <p>Nv. 12</p>
                        </div>
                    </div>
                  */}
                </div>
                

            </div>

      </div>


    </div>
  );
}

export default Musicas;