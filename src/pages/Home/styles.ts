import { RectButton } from 'react-native-gesture-handler';
import { Paragraph, Title, Text } from 'react-native-paper';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const WelcomeText = styled(Title)<{ color: string }>`
  font-family: 'Roboto, sans-serif';
  font-weight: 700;
  color: ${props => props.color};
`;

export const Content = styled.View`
  margin-top: 24px;
  align-items: center;
`;

export const CardContainer = styled(RectButton)<{ color: string }>`
  width: 320px;
  height: 153px;
  background: ${props => props.color};
  border-radius: 6px;
  margin-bottom: 16px;
  padding: 20px 24px;
`;

export const CardContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Counter = styled(Text)<{ color: string }>`
  font-family: 'Roboto, sans-serif';
  font-size: 48px;
  font-weight: 700;
  color: ${props => props.color};
`;

export const Description = styled(Paragraph)<{ color: string }>`
  flex: 1;
  font-family: 'Roboto, sans-serif';
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.color};
`;
