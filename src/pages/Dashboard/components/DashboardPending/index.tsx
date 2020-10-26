import React from 'react';

import ContentHeader from '../DashboardHeader';
import OrphanageCard from '../OrphanageCard';

import { Container, OrphanageList } from './styles';

const DashboardRegistered: React.FC = () => {
  return (
    <Container>
      <ContentHeader
        title={"Cadastros pendentes"}
        orphanages={2}
      />

      <OrphanageList>
        <OrphanageCard isPending={true}/>
      </OrphanageList>
    </Container>
  );
}

export default DashboardRegistered;
