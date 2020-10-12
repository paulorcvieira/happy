import React from 'react';
import logoImg from '../assets/images/logo.svg';

import {
  Container,
  ContentWrapper,
  Logo,
  Content,
  Title,
  Description,
  Location,
  City,
  State,
  EnterApp,
  EnterAppIcon,
} from '../styles/pages/landing';

const Landing: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <Logo src={logoImg} alt="Happy" />
        <Content>
          <Title>Leve felicidade para o mundo</Title>
          <Description>
            Visite orfanatos e mude o dia de muitas crianças.
          </Description>
        </Content>

        <Location>
          <City>Ponta Grossa</City>
          <State>Paraná</State>
        </Location>

        <EnterApp to="/orfanatos">
          <EnterAppIcon />
        </EnterApp>
      </ContentWrapper>
    </Container>
  );
};

export default Landing;
