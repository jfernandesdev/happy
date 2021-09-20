import { useHistory } from 'react-router-dom';
import { FiArrowLeft, FiPlus } from 'react-icons/fi';
import { Map, Marker, TileLayer } from 'react-leaflet';
import L from 'leaflet';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/create-orphanage.scss';

const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,
  iconSize: [56, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -68]
})

export default function CreateOrphanage() {
  const { goBack } = useHistory();

  return (
    <div id="page-create-orphanage">
      <aside className="sidebar">
        <img src={mapMarkerImg} alt="Happy" />

        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>

      <main>
        <form className="create-orphanage-form">
          <fieldset>
            <legend>Dados:</legend>

            <Map
              center={[-21.2406753, -45.0002598]}
              style={{ width: '100%', height: 280 }}
              zoom={17}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />
              <Marker interactive={false} icon={happyMapIcon} position={[-21.2406753, -45.0002598]} />
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" />
            </div>

            <div className="input-block">
              <label htmlFor="about">Sobre <span>Máx. 300 caracteres</span></label>
              <textarea id="about" maxLength={300} />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>
              <div className="uploaded-image">

              </div>

              <button className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions" />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horários de funcionamento</label>
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana?</label>
              <div className="button-select">
                <button type="button" className="active">Sim</button>
                <button type="button">Não</button>
              </div>
            </div>
          </fieldset>

          <button type="submit" className="submit-button">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}