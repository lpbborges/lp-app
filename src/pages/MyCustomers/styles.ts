import { Pressable } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-top: 32px;
  padding: 0 0 0 28px;
`;

export const CustomerItem = styled(Pressable)`
  padding: 8px;
  margin-bottom: 16px;
`;

export const Name = styled.Text`
  color: #fff;
  margin-bottom: 8px;
  font-size: 14px;
`;

export const PhoneNumber = styled.Text`
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
`;

export const NewCustomerButton = styled(RectButton)`
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: #6f4fa2;
  border-radius: 25px;
  position: absolute;
  margin: 16px;
  right: 0;
  bottom: 0;
`;
