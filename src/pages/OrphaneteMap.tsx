import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
//import Leaflet, { popup } from 'leaflet';

import mapMarkerImg from '../../src/images/map-marker.svg';
import ct_formularioImg from '../../src/images/ct_formulario.svg';
import ct_DashboardImg from '../../src/images/ct_Dashboard.svg';

import '../styles/pages/OrphanegesMap.css';
import mapIcon from '../utils/mapIcons';
import api from '../services/api';
//import { tileLayer } from 'leaflet';

interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
    opening_hours: string;
}

function OrphanegeMap() {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data);
        });
    }, []);

    return (
        <div id="page-map">
            <aside>
                <header>
                    <Link to="/" >
                        <img className="create-itens" src={mapMarkerImg} alt="LogoCNT" />
                    </Link>

                </header>
                <main>
                    <Link to="/orphanages/create" >
                        <button className="item">Acessar Formulário</button>
                        
                        <img src={ct_formularioImg} alt="ct_formularioImg" />
                    </Link>
                    <Link to="/orphanages/create" >

                    <button className="item">Dashboard</button>
                   
                        <img src={ct_DashboardImg} alt="ct_DashboardImg" />
                    </Link>
                </main>

                <footer>
                    <strong>SEST SENAT</strong>
                    <strong>ITL</strong>
                </footer>
            </aside>

            <Map
                center={[-22.2938638, -42.5324806]}
                zoom={16}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                {/* satellite-v9 ou dark vc pode estilizar na HP */}

                {orphanages.map(orphanage => {
                    return (
                        <Marker
                            icon={mapIcon}
                            position={[orphanage.latitude, orphanage.longitude]}
                            key={orphanage.id}
                        >
                            <Popup closeButton={false} minWidth={240} maxHeight={240} className="map-popup">
                            {orphanage.name} |  Trecho com {orphanage.opening_hours} Km
                                <Link to={`/orphanages/${orphanage.id}`}>
                                    <FiArrowRight size={20} color="#fff" />
                                </Link>
                            </Popup>
                        </Marker>
                    )
                })}
            </Map>
            <Link to="/orphanages/create" className="create-orphanege">
                <FiPlus size={32} color="fff" />
            </Link>
        </div>
    );
}
<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
export default OrphanegeMap;