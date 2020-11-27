import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatar, Headline, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { CardContainer, CardContent, Counter, Description } from './styles';

const Home: React.FC = () => {
  const { colors, fonts } = useTheme();
  const { navigate } = useNavigation();

  const styles = StyleSheet.create({
    container: {
      paddingStart: 29,
      paddingEnd: 16,
    },
    header: {
      flexDirection: 'row',
      marginTop: 36,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    headline: {
      fontFamily: fonts.regular.fontFamily,
      fontWeight: '700',
      color: colors.text,
    },
    cardsContainer: {
      marginTop: 24,
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Headline style={styles.headline}>Bem vindo, John Doe</Headline>
        <Avatar.Image
          size={54}
          source={{
            uri:
              'https://static.wikia.nocookie.net/evangelion/images/3/31/Bardiel_closeup.png/revision/latest?cb=20120312043054',
          }}
        />
      </View>
      <View style={styles.cardsContainer}>
        <CardContainer
          testID="week-schedules"
          color={colors.failure}
          onPress={() => navigate('Schedules')}
        >
          <CardContent>
            <Counter color={colors.text}>4</Counter>
            <Icon name="assignment" size={26} color={colors.text} />
          </CardContent>
          <CardContent>
            <Description color={colors.text}>
              Agendamentos para esta semana
            </Description>
            <Icon name="chevron-right" size={26} color={colors.text} />
          </CardContent>
        </CardContainer>

        <CardContainer
          testID="to-receive-schedules"
          color={colors.accent}
          onPress={() => navigate('Schedules')}
        >
          <CardContent>
            <Counter color={colors.text}>6</Counter>
            <Icon name="attach-money" size={26} color={colors.text} />
          </CardContent>
          <CardContent>
            <Description color={colors.text}>
              Agendamentos com pagamento pendente
            </Description>
            <Icon name="chevron-right" size={26} color={colors.text} />
          </CardContent>
        </CardContainer>
      </View>
    </View>
  );
};

export default Home;
