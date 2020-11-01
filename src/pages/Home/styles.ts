import { RectButton } from 'react-native-gesture-handler';
import { Paragraph, Title, Text } from 'react-native-paper';
import styled from 'styled-components/native';

interface ContentCardProps {
  type: 'to-receive' | 'week';
}

export const Container = styled.View`
  padding: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const WelcomeText = styled(Title)`
  font-family: 'Roboto, sans-serif';
  font-weight: 700;
  color: #fff;
`;

export const Content = styled.View`
  margin-top: 24px;
  align-items: center;
`;

export const CardContainer = styled(RectButton)<ContentCardProps>`
  width: 320px;
  height: 153px;
  background: ${props => (props.type === 'to-receive' ? '#6F4FA2' : '#FF7474')};
  border-radius: 6px;
  margin-bottom: 16px;
  padding: 20px 24px;
`;

export const CardContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Counter = styled(Text)`
  font-family: 'Roboto, sans-serif';
  font-size: 48px;
  font-weight: 700;
  color: #fff;
`;

export const Description = styled(Paragraph)`
  flex: 1;
  font-family: 'Roboto, sans-serif';
  font-size: 14px;
  font-weight: 500;
  color: #fff;
`;
