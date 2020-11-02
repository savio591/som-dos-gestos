import React from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";
import "../styles/pages/pontuacao.css";

function Pontuacao() {
    const emocao = 29;
    const tempo = 25;

    const total = emocao + tempo

  return (
    <div id="container">
        <div className="pontos">
        <h2>Você ganhou</h2>
        <h3>{total} pontos!</h3>
        </div>
        <div className="estatisticas">
            <div className="ct_st">
                <h3>Emoção</h3>
                <p>{emocao}pts.</p>
            </div>

            <div className="ct_st">
                <h3>Tempo</h3>
                <p>{emocao}pts.</p>
            </div>
        </div>
        <div className="voltar">
            <Link to="/dashboard">
                <p>Voltar</p>
            </Link>        
            </div>
    </div>
  );
}

export default Pontuacao;