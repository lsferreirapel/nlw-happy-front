import React from 'react';

import ContentHeader from '../DashboardHeader';
import OrphanageCard from '../OrphanageCard';

import { Container, OrphanageList } from './styles';

const DashboardRegistered: React.FC = () => {
  return (
    <Container>
      <ContentHeader
        title={"Orfanatos Cadastrados"}
        orphanages={2}
      />

      <OrphanageList>
        <OrphanageCard />
      </OrphanageList>
    </Container>
  );
}

export default DashboardRegistered;
