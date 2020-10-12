import React, { useCallback, useState } from 'react';
import { Map, TileLayer } from 'react-leaflet';

import mapMarkerImg from '../assets/images/map-marker.svg';

import {
  Container,
  Sidebar,
  Header,
  LogoMin,
  Title,
  Description,
  Footer,
  City,
  State,
  MapOrphanages,
  ChangeViewMapMode,
  AddOrphanage,
  AddOrphanageIcon,
} from '../styles/pages/orphanages-map';

const OrphanagesMap: React.FC = () => {
  const [changeModeMap, setChangeModeMap] = useState(true);

  const mapStyle = {
    width: '100%',
    height: '100%',
  };

  return (
    <Container>
      <Sidebar>
        <Header>
          <LogoMin src={mapMarkerImg} alt="Happy" />
          <Title>Escolha um orfanato no mapa</Title>
          <Description>
            Muitas crianças estão esperando a sua visita :)
          </Description>
        </Header>

        <Footer>
          <City>Ponta Grossa</City>
          <State>Paraná</State>
        </Footer>

        <ChangeViewMapMode
          type="button"
          onClick={() => setChangeModeMap(!changeModeMap)}
        >
          {changeModeMap ? 'Sátelite' : 'Mapa'}
        </ChangeViewMapMode>
      </Sidebar>

      <MapOrphanages>
        <Map center={[-25.1253981, -50.1104495]} zoom={15} style={mapStyle}>
          {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/${
              changeModeMap ? 'light-v10' : 'satellite-v9'
            }/tiles/256/{z}/{x}/{y}@2x?access_token=${
              process.env.REACT_APP_MAPBOX_TOKEN
            }`}
          />
        </Map>
      </MapOrphanages>

      <AddOrphanage to="/">
        <AddOrphanageIcon />
      </AddOrphanage>
    </Container>
  );
};

export default OrphanagesMap;
