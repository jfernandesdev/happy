import mapMarkerImg from '../images/map-marker.svg';
import L from 'leaflet';

export const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,
  iconSize: [56, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -68]
})