import { Fragment } from 'react';
import { Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import { useCountries } from '../hooks/useCountries';
import CountryInformation from './country-information';

const MapContent = () => {
  const { countries } = useCountries();

  const map = useMapEvents({
    click() {
      // TODO* console.log('asd');
      map.locate();
    },
    locationfound(e) {
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return (
    <>
      {countries?.map((country) => {
        return (
          <Fragment key={country.ccn3}>
            <Marker position={[...country.latlng]}>
              <Popup>
                <CountryInformation country={country} />
              </Popup>
            </Marker>
          </Fragment>
        );
      })}
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </>
  );
};

export default MapContent;
