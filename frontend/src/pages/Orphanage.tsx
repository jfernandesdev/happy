import { useHistory } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { FiArrowLeft, FiInfo, FiClock } from 'react-icons/fi';
import { Map, Marker, TileLayer } from 'react-leaflet';
import L from 'leaflet';

import mapMarkerImg from '../images/map-marker.svg';
import '../styles/orphanage.scss';

const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,
  iconSize: [56, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -68]
})

export default function Orphanage() {
  const { goBack } = useHistory();

  return (
    <div id="page-orphanage">
      <aside className="sidebar">
        <img src={mapMarkerImg} alt="Happy" />

        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>

      <main>
        <div className="orphanage-details">
          <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />

          <div className="images">
            <button className="active" type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>

            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>

            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>

            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>

            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>

            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
          </div>

          <div className="orphanage-details-content">
            <h1>Lar das meninas</h1>
            <p>Presta assistência a crianças de 06 a 15 anos que se encontra em situação de risco e/ou vulnerabilidade.</p>

            <div className="map-container">
              <Map
                center={[-21.2406753, -45.0002598]}
                zoom={18}
                style={{ width: '100%', height: 280 }}
                interactive={false}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />

                <Marker position={[-21.2406753, -45.0002598]} interactive={false} icon={happyMapIcon} />
              </Map>

              <footer>
                <a href="">Ver rotas no Google Maps</a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>Venha como se sentir mais à vontade e traga muito amor para dar.</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à  Sexta <br /> 8h às 18h
              </div>

              <div className="open-on-weekends">
                <FiInfo size={32} color="#39CC83" />
                Atendemos <br /> fim de semana
              </div>
            </div>

            <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}