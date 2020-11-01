import React from "react";
import { Link } from 'react-router-dom';

import '../styles/pages/formularioForm.css';
import imgg from '../images/cnt-white.png';
import i_1_1 from '../images/form/1_1.svg';

import i111 from '../images/form/i111.svg'
import i112 from '../images/form/i112.svg'
import i113 from '../images/form/i113.svg'
import i114 from '../images/form/i114.svg'
import i115 from '../images/form/i115.svg'
import i121 from '../images/form/i121.svg'
import i122 from '../images/form/i122.svg'
import i16 from '../images/form/i16.svg'
import i171 from '../images/form/i171.svg'
import i1711 from '../images/form/i1711.svg'
import i181 from '../images/form/i181.svg'
import i182 from '../images/form/i182.svg'
import nao from '../images/form/nao.svg'
import sim from '../images/form/sim.svg'


export default function CreateOrphanage() {
    return (
        <div id="page-formulario">
            <header>
                <Link to="/formulario" className="enter-app">
                <img src={imgg} alt="logo" /></Link>
                <div className="header_textos">
                    <h3>Olá, visitante!</h3>
                    <Link to="/formulario" className="enter-app">
                        <h3>Voltar</h3>
                    </Link>
                </div>

            </header>
            <main>
                <div className="titulos">
                    <h1>Formulário de Pesquisa CNT  de Rodovias 2020</h1>
                    <h2>Rota: 1 - Km 296 -  Nova Friburgo/RJ</h2>
                </div>
                {/* Container 1*/}
                <div className="ct">
                    <h2>1 - Geometria da Vila</h2>
                    <div className="grids">
                        <div className="ct_1-1 testes">
                            <h3>1.1 - Tipo de Rodovia</h3>
                            <div className="spacing">
                                <label>
                                    <input type="radio" name="1-1" value="1" />
                                    <img src={i111} alt='test' />
                                </label>

                                <label>
                                    <input type="radio" name="1-1" value="2" />
                                    <img src={i112} alt='test' />

                                </label>
                                <label>
                                    <input type="radio" name="1-1" value="3" />
                                    <img src={i113} alt='test' />

                                </label>
                                <label>
                                    <input type="radio" name="1-1" value="3" />
                                    <img src={i114} alt='test' />

                                </label>
                                <label>
                                    <input type="radio" name="1-1" value="4" />
                                    <img src={i115} alt='test' />

                                </label>
                            </div>
                        </div>
                        <div className="ct_1-1 testes">
                            <h3>1.2 - Perfil da Rodovia</h3>
                            <div className="spacing">
                                <label>
                                    <input type="radio" name="b" value="1" />
                                    <img src={i121} alt='test' />
                                </label>

                                <label>
                                    <input type="radio" name="b" value="2" />
                                    <img src={i122} alt='test' />

                                </label>
                            </div>
                        </div>
                        <div className="ct_1-3 testes">
                            <h3>1.3 - Faixa Adicional de Subida</h3>
                            <div className="spacing">
                                <label>
                                    <input type="radio" name="c" value="1" />
                                    <img src={i16} alt='test' />
                                </label>

                                <label>
                                    <input type="radio" name="c" value="2" />
                                    <img src={i16} alt='test' />

                                </label>
                            </div>
                        </div>
                        <div className="ct_1-4 testes">
                            <h3>1.4 - Pontes/Viadutos</h3>
                            <div className="spacing">
                                <label>
                                    <input type="radio" name="d" value="1" />
                                    <img src={i_1_1} alt='test' />
                                </label>

                                <label>
                                    <input type="radio" name="d" value="2" />
                                    <img src={i_1_1} alt='test' />

                                </label>
                            </div>
                        </div>
                        <div className="ct_1-5 testes">
                            <h3>1.5 - Curvas Perigosas</h3>
                            <div className="spacing">
                                <label>
                                    <input type="radio" name="e" value="1" />
                                    <img src={i_1_1} alt='test' />
                                </label>

                                <label>
                                    <input type="radio" name="e" value="2" />
                                    <img src={i_1_1} alt='test' />

                                </label>
                            </div>
                        </div>
                        <div className="ct_1-6 testes">
                            <h3>1.6 - Acostamento</h3>
                            <div className="spacing">
                                <label>
                                    <input type="radio" name="f" value="1" />
                                    <img src={i171} alt='test' />
                                </label>

                                <label>
                                    <input type="radio" name="f" value="2" />
                                    <img src={i1711} alt='test' />

                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Container 2*/}
                <div className="ct">
                    <h2>2 - Pavimento</h2>
                    <div className="grids">
                        <div className="ct_1-1 testes">
                            <h3>2.1 - Condições de superfície</h3>
                            <div className="spacing">
                                <label>
                                    <input type="radio" name="g" value="1" />
                                    <img src={i181} alt='test' />
                                </label>

                                <label>
                                    <input type="radio" name="g" value="2" />
                                    <img src={i182} alt='test' />

                                </label>
                            </div>
                        </div>
                        <div className="ct_1-2 testes">
                            <h3>2.2 - Velocidade devido ao pavimento</h3>
                            <div className="spacing">
                                <label>
                                    <input type="radio" name="h" value="1" />
                                    <img src={sim} alt='test' />
                                </label>

                                <label>
                                    <input type="radio" name="h" value="2" />
                                    <img src={nao} alt='test' />

                                </label>
                            </div>
                        </div>
                        <div className="ct_1-3 testes">
                            <h3>2.3 - Ponto Crítico</h3>
                            <div className="spacing">
                                <label>
                                    <input type="radio" name="i" value="1" />
                                    <img src={sim} alt='test' />
                                </label>

                                <label>
                                    <input type="radio" name="i" value="2" />
                                    <img src={nao} alt='test' />

                                </label>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Container 3*/}
                <div className="ct">
                    <h2>3 - Sinalização</h2>
                    <div className="grids">
                        <div className="ct_1-1 testes">
                            <h3>3.1 - Sinalização Horizontal</h3>
                            <div className="spacing">
                                <label>
                                    <input type="radio" name="j" value="1" />
                                    <img src={sim} alt='test' />
                                </label>

                                <label>
                                    <input type="radio" name="j" value="2" />
                                    <img src={nao} alt='test' />
                                </label>
                            </div>
                        </div>
                        <div className="ct_1-2 testes">
                            <h3>3.1.1 - Faixa Central</h3>
                            <div className="spacing">
                                <label>
                                    <input type="radio" name="k" value="1" />
                                    <img src={sim} alt='test' />
                                </label>

                                <label>
                                    <input type="radio" name="k" value="2" />
                                    <img src={nao} alt='test' />

                                </label>
                            </div>
                        </div>
                        <div className="ct_1-3 testes">
                            <h3>3.1.2 - Faixas Laterais</h3>
                            <div className="spacing testes">
                                <label>
                                    <input type="radio" name="l" value="1" />
                                    <img src={sim} alt='test' />
                                </label>

                                <label>
                                    <input type="radio" name="l" value="2" />
                                    <img src={nao} alt='test' />

                                </label>
                            </div>
                        </div>
                        <div className="ct_1-4 testes">
                            <h3>3.2 - Defensas</h3>
                            <div className="spacing">
                                <label>
                                    <input type="radio" name="m" value="1" />
                                    <img src={sim} alt='test' />
                                </label>

                                <label>
                                    <input type="radio" name="m" value="2" />
                                    <img src={nao} alt='test' />

                                </label>
                            </div>
                        </div>
                        <div className="ct_1-5 testes">
                            <h3>3.3 - Sinalização Vertical</h3>
                            <div className="spacing testes">
                                <label>
                                    <input type="radio" name="o" value="1" />
                                    <img src={sim} alt='test' />
                                </label>

                                <label>
                                    <input type="radio" name="o" value="2" />
                                    <img src={nao} alt='test' />

                                </label>
                            </div>
                        </div>
                        <div className="ct_1-6 testes">
                            <h3>3.3.1 - Placa de velocidade</h3>
                            <div className="spacing">
                                <label>
                                    <input type="radio" name="p" value="1" />
                                    <img src={sim} alt='test' />
                                </label>

                                <label>
                                    <input type="radio" name="p" value="2" />
                                    <img src={nao} alt='test' />

                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="ocorrencia">
                    <p>Inserir uma ocorrência</p>
                </div>
                <h2 className="info_saved">Todas as informações estão salvas automaticamente!</h2>
               
            </main>
        </div >
    );
}