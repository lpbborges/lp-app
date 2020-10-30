import { TextInput, Button } from 'react-native-paper';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 50px 28px 50px 36px;
  align-items: center;
`;

export const InputContainer = styled.View`
  margin-bottom: 20px;
  width: 100%;
`;

export const InputLabel = styled.Text`
  color: #fff;
  font-size: 12px;
  line-height: 12px;
`;

export const Input = styled(TextInput).attrs({
  underlineColor: '#ffffff73',
  mode: 'flat',
  theme: {
    colors: {
      primary: '#6f4fa2',
      text: '#ffffff73',
      placeholder: '#fff',
      background: 'transparent',
    },
  },
})`
  font-size: 14px;
  margin-bottom: 32px;
`;

export const ConcludeButton = styled(Button).attrs({
  upperCase: true,
  color: '#6f4fa2',
  labelStyle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  contentStyle: {
    height: 36,
    width: 188,
    borderRadius: 2,
  },
})``;

export const CancelButton = styled(Button).attrs({
  upperCase: true,
  color: 'transparent',
  marginTop: 8,
  labelStyle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  contentStyle: {
    height: 36,
    width: 188,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#fff',
  },
})``;
