import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
//import Leaflet, { popup } from 'leaflet';

import mapMarkerImg from '../../src/images/cnt-white.png';
// import ct_formularioImg from '../../src/images/ct_formulario.svg';
// import ct_DashboardImg from '../../src/images/ct_Dashboard.svg';

import '../styles/pages/nctHedear.css';
import mapIcon from '../utils/mapIcons';
import api from '../services/api';
//mport { tileLayer } from 'leaflet';

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

            <Link to="/dashboard">                
                <img src={mapMarkerImg} alt="CNT" /> 
            </Link>
            
              
                </aside>          

            <Map
                center={[-22.2938638, -42.5324806]}
                zoom={16}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZG9taW5nb3NuZXR0byIsImEiOiJja2diZHB3dnYwMHV0MzBvNjFjY3kwaGZrIn0.tU9BM_b0RXP0peB_fyhGLQ`}
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
            <Link to="/formulario" className="create-orphanege">
            <p>Iniciar</p>
            </Link>
        </div>
    );
}
//<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
export default OrphanegeMap;