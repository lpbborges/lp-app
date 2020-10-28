import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Header,
  WelcomeText,
  Avatar,
  Content,
  ContentCard,
  TopContent,
  Counter,
  BottomContent,
  Description,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <WelcomeText>Bem vindo, John Doe</WelcomeText>
        <Avatar
          source={{
            uri:
              'https://static.wikia.nocookie.net/evangelion/images/3/31/Bardiel_closeup.png/revision/latest?cb=20120312043054',
          }}
        />
      </Header>
      <Content>
        <ContentCard>
          <TopContent>
            <Counter>4</Counter>
            <Icon name="assignment" size={26} color="#fff" />
          </TopContent>
          <BottomContent>
            <Description>Agendamentos para esta semana</Description>
            <Icon name="chevron-right" size={26} color="#fff" />
          </BottomContent>
        </ContentCard>
        <ContentCard style={{ backgroundColor: '#6F4FA2' }}>
          <TopContent>
            <Counter>6</Counter>
            <Icon name="attach-money" size={26} color="#fff" />
          </TopContent>
          <BottomContent>
            <Description>Agendamentos com pagamento pendente</Description>
            <Icon name="chevron-right" size={26} color="#fff" />
          </BottomContent>
        </ContentCard>
      </Content>
    </Container>
  );
};

export default Home;
