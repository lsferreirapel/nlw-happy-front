import React, { useState } from 'react';

import DashboardSidebar from './components/DashboardSidebar';
import DashboardRegistered from './components/DashboardRegistered';
import DashboardPending from './components/DashboardPending';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  const [tabSelector, setTabSelector] = useState('registered');

  function handleSidebarChange(value: string) {
    setTabSelector(value);
  }

  return (
    <Container>
      <DashboardSidebar onChange={handleSidebarChange} />

      {(tabSelector === 'registered') ? (<DashboardRegistered />) : (<DashboardPending />)}

    </Container>
  );
}

export default Dashboard;
