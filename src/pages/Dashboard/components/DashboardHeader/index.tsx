import React from 'react';

import { Container } from './styles';

interface DashboardHeaderProps {
  title: string;
  orphanages: number;
}

const ContentHeader: React.FC<DashboardHeaderProps> = ({title, orphanages}) => {
  return (
    <Container>
      <div className="title">
        <h1>{title}</h1>
        <p>{orphanages} orfanatos</p>
        </div>
      <div className="line"></div>
    </Container>
  );
}

export default ContentHeader;
