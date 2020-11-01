import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatar } from 'react-native-paper';

import {
  Container,
  Header,
  WelcomeText,
  Content,
  CardContainer,
  CardContent,
  Counter,
  Description,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <WelcomeText>Bem vindo, John Doe</WelcomeText>
        <Avatar.Image
          size={54}
          source={{
            uri:
              'https://static.wikia.nocookie.net/evangelion/images/3/31/Bardiel_closeup.png/revision/latest?cb=20120312043054',
          }}
        />
      </Header>
      <Content>
        <CardContainer type="week" onPress={() => console.log('')}>
          <CardContent>
            <Counter>4</Counter>
            <Icon name="assignment" size={26} color="#fff" />
          </CardContent>
          <CardContent>
            <Description>Agendamentos para esta semana</Description>
            <Icon name="chevron-right" size={26} color="#fff" />
          </CardContent>
        </CardContainer>
        <CardContainer type="to-receive" onPress={() => console.log('')}>
          <CardContent>
            <Counter>6</Counter>
            <Icon name="attach-money" size={26} color="#fff" />
          </CardContent>
          <CardContent>
            <Description>Agendamentos com pagamento pendente</Description>
            <Icon name="chevron-right" size={26} color="#fff" />
          </CardContent>
        </CardContainer>
      </Content>
    </Container>
  );
};

export default Home;
