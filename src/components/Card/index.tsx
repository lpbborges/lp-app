import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card as PaperCard, Paragraph, useTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const Card: React.FC = () => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    card: {
      width: 320,
      height: 153,
      backgroundColor: '#fff',
      borderRadius: 6,
      // margin-bottom: 16px,
      // padding: 20px 24px,
    },
  });

  return (
    <PaperCard style={styles.card}>
      <PaperCard.Title
        title="4"
        right={props => (
          <Icon name="assignment" {...props} size={26} color={colors.text} />
        )}
      />
      <PaperCard.Content>
        <Paragraph>Agendamentos para esta semana</Paragraph>
        <Icon name="chevron-right" size={26} color={colors.text} />
      </PaperCard.Content>
    </PaperCard>
  );
};

export default Card;
