import React from 'react';

import { FiEdit3, FiTrash, FiArrowRight } from 'react-icons/fi';
import { Map, Marker, TileLayer } from 'react-leaflet';
import mapIcon from '../../../../utils/mapIcon';

import { Container } from './style';

interface OrphanageCardProps {
  isPending?: boolean;
}

const OrphanageCard: React.FC<OrphanageCardProps> = ({isPending=false}) => {
  return(
    <Container>
      <Map
        center={[-31.7648459,-52.3403487]}
        zoom={16}
        style={{ width: '100%', height: 227 }}
        dragging={false}
        touchZoom={false}
        zoomControl={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        <Marker interactive={false} icon={mapIcon} position={[-31.7648459,-52.3403487]} />
      </Map>

      <div className="description">
        <h2>Orf. Esperança</h2>

        {isPending ? (
          <div className="icon">
            <button>
              <FiArrowRight size={24}/>
            </button>
          </div>
        ) : (
          <div className="icons">
            <button>
              <FiEdit3 size={24}/>
            </button>

            <button>
              <FiTrash size={24}/>
            </button>
          </div>
        )}



      </div>
    </Container>
  );
}

export default OrphanageCard;
