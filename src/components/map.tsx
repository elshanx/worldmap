import { MapContainer } from 'react-leaflet';
import MapContent from './map-content';

const Map = () => {
  return (
    <>
      <MapContainer center={[45.4, -75.7]} zoom={2} scrollWheelZoom={false}>
        <MapContent />
      </MapContainer>
    </>
  );
};

export default Map;
