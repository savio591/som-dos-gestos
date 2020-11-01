import React, { ChangeEvent, FormEvent, useState } from "react";
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

import { FiPlus } from "react-icons/fi";

import Sidebar from "../components/Sidebar";
import '../styles/pages/formulario.css';
import mapIcon from "../utils/mapIcons";
import api from "../services/api";
import imgg from '../images/cnt-white.png';


export default function CreateOrphanage() {
    const history = useHistory();
    const [position, setPosition] = useState({
        latitude: 0,
        longitude: 0
    });
    const [name, setName] = useState('');
    const [about, setAbout] = useState('');
    const [instructions, setInstructions] = useState('');
    const [opening_hours, setOpeningHours] = useState('');
    const [open_on_weekends, setOpenOnWeekends] = useState(true);
    const [images, setImages] = useState<File[]>([]);
    const [previewImages, setPreviewImages] = useState<string[]>([]);

    function handleMapClick(event: LeafletMouseEvent) {
        const { lat, lng } = event.latlng;

        setPosition({
            latitude: lat,
            longitude: lng
        });
        //    console.log(event.latlng);
    }
    function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
        if (!event.target.files) {
            return;
        }
        const selectImages = Array.from(event.target.files);
        setImages(selectImages);

        const selectedImagesPreview = selectImages.map(image => {
            return URL.createObjectURL(image);
        });

        setPreviewImages(selectedImagesPreview);
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const { latitude, longitude } = position;

        const data = new FormData();

        data.append('name', name);
        data.append('about', about);
        data.append('latitude', String(latitude));
        data.append('longitude', String(longitude));
        data.append('instructions', instructions);
        data.append('opening_hours', opening_hours);
        data.append('open_on_weekends', String(open_on_weekends));

        images.forEach(image => {
            data.append('images', image);
        })

        await api.post('orphanages', data);
        alert(' Cadastro realizado ');

        history.push('/app');
        console.log({
            position,
            name,
            about,
            latitude,
            longitude,
            instructions,
            opening_hours,
            open_on_weekends,

        })
    }

    return (
        <div id="page-create-orphanage">
            <Sidebar />
            <header>
                <img src={imgg} alt="logo" />
                <div className="header_textos">
                    <h3 className="bigger">Olá, visitante!</h3>
                    <Link to="/" className="enter-app">
                        <h3 className="bigger">Sair</h3>
                    </Link>
                </div>

            </header>
            <main>
                <div className="titulos">
                    <h1>Formulário de Pesquisa CNT  de Rodovias 2020</h1>
                </div>
                <form onSubmit={handleSubmit} className="create-orphanage-form">
                    <fieldset>
                        <legend>Dados</legend>

                        <Map
                            center={[-22.2938638, -42.5324806]}
                            style={{ width: '100%', height: 280 }}
                            zoom={15}
                            onclick={handleMapClick}
                        >
                            <TileLayer
                                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZG9taW5nb3NuZXR0byIsImEiOiJja2diZHB3dnYwMHV0MzBvNjFjY3kwaGZrIn0.tU9BM_b0RXP0peB_fyhGLQ`}
                            />

                            {position.latitude !== 0 && (
                                <Marker
                                    interactive={false}
                                    icon={mapIcon}
                                    position={[
                                        position.latitude,
                                        position.longitude
                                    ]}
                                />
                            )}

                            {/*<Marker interactive={false} icon={mapIcon} position={[-27.2092052,-49.6401092]} />*/}
                        </Map>

                        <div className="input-block">
                            <label htmlFor="name">Local</label>
                            <input
                                id="name"
                                value={name}
                                onChange={event => setName(event.target.value)} />
                        </div>

                        <div className="input-block">
                            <label htmlFor="about">Informações adicionais <span>Máximo de 300 caracteres</span></label>
                            <textarea
                                id="name"
                                maxLength={300}
                                value={about}
                                onChange={event => setAbout(event.target.value)} />
                        </div>

                        <div className="input-block">
                            <label htmlFor="images">Fotos</label>

                            <div className="images-container">
                                {previewImages.map(image => {
                                    return (
                                        <img key={image} src={image} alt={name} />
                                    )

                                })}
                                <label htmlFor="image[]" className="new-image">
                                    <FiPlus size={24} color="#15b6d6" />
                                </label>

                            </div>

                            <input multiple onChange={handleSelectImages} type="file" id="image[]" />
                        </div>
                    </fieldset>

                    <fieldset className="hidder">
                        <legend>Visitação</legend>

                        <div className="input-block">
                            <label htmlFor="instructions">Instruções</label>
                            <textarea
                                id="instructions"
                                value={instructions}
                                onChange={event => setInstructions(event.target.value)} />
                        </div>

                        <div className="input-block">
                            <label htmlFor="opening_hours">Horário de funcionamento:</label>
                            <input
                                id="opening_hours"
                                value={opening_hours}
                                onChange={event => setOpeningHours(event.target.value)} />
                        </div>

                        <div className="input-block">
                            <label htmlFor="open_on_weekends">Atende fim de semana</label>

                            <div className="button-select">
                                <button
                                    type="button"
                                    className={open_on_weekends ? 'active' : ''}
                                    onClick={() => setOpenOnWeekends(true)}
                                >
                                    Sim
                   </button>
                                <button
                                    type="button"
                                    className={!open_on_weekends ? 'active' : ''}
                                    onClick={() => setOpenOnWeekends(false)}
                                >
                                    Não
                  </button>
                            </div>
                        </div>
                    </fieldset>

                    <button className="confirm-button" type="submit">
                        <Link to="/formularioMarker" className="enter-app">Abrir formulário</Link>
          </button>
                </form>
            </main>
        </div>
    );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
