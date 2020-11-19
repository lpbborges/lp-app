import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatar, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

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
  const { colors } = useTheme();
  const { navigate } = useNavigation();

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
        <CardContainer
          testID="week-schedules"
          type="week"
          onPress={() => navigate('Schedules')}
        >
          <CardContent>
            <Counter>4</Counter>
            <Icon name="assignment" size={26} color={colors.text} />
          </CardContent>
          <CardContent>
            <Description>Agendamentos para esta semana</Description>
            <Icon name="chevron-right" size={26} color={colors.text} />
          </CardContent>
        </CardContainer>

        <CardContainer
          testID="to-receive-schedules"
          type="to-receive"
          onPress={() => navigate('Schedules')}
        >
          <CardContent>
            <Counter>6</Counter>
            <Icon name="attach-money" size={26} color={colors.text} />
          </CardContent>
          <CardContent>
            <Description>Agendamentos com pagamento pendente</Description>
            <Icon name="chevron-right" size={26} color={colors.text} />
          </CardContent>
        </CardContainer>
      </Content>
    </Container>
  );
};

export default Home;
