import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'

import mapMarkerImg from '../images/map-marker.svg';
import '../styles/orphanages-map.scss';

export default function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <Link to='/'>
            <img src={mapMarkerImg} alt="Ícone da Logo Happy" />
          </Link>
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Lavras</strong>
          <span>Minas Gerais</span>
        </footer>
      </aside>

      <Map
        center={[-21.2429719, -45.0059827]}
        zoom={13.5}
        style={{ width: '100%', height: '100%' }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>

      <Link to='#' className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}