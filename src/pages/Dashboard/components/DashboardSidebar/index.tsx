import React, { MouseEvent, useState } from 'react';

import { FiAlertCircle, FiMapPin, FiPower } from 'react-icons/fi';
import { Container, SidebarButton, } from './styles';
import mapMarkerImg from '../../../../assets/images/map-marker.svg';

interface DashboardSidebarProps{
  onChange: Function;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({onChange}) => {
  const [active, setActive] = useState();


  function handleOnSidebarButtonClick(value: string) {
    if (value === 'pending') {
      if (document.getElementById('registered')?.classList.contains('active')) {
        document.getElementById('registered')?.classList.remove('active');
      }
      document.getElementById('pending')?.classList.add('active');
    } else  {
      if (document.getElementById('pending')?.classList.contains('active')) {
        document.getElementById('pending')?.classList.remove('active');
      }
      document.getElementById('registered')?.classList.add('active');
    }


    onChange(value);
  }

  return (
    <Container>
        <img src={mapMarkerImg} alt="Happy marker logo"/>

        <div className="center-buttons">
          <SidebarButton className="active" id="registered" onClick={() => handleOnSidebarButtonClick('registered')}><FiMapPin size={24}/></SidebarButton>
          <SidebarButton id="pending" onClick={() => handleOnSidebarButtonClick('pending')}><FiAlertCircle size={24} /></SidebarButton>
        </div>

        <footer>
          <SidebarButton><FiPower size={24}/></SidebarButton>
        </footer>
      </Container>
  );
}

export default DashboardSidebar;
