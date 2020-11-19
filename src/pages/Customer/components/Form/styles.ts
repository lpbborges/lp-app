import { TextInputProps } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import styled from 'styled-components/native';

interface InputProps extends TextInputProps {
  isErrored: boolean;
}

export const Container = styled.View`
  flex: 1;
  padding: 50px 28px 50px 36px;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  margin-bottom: 12px;
  width: 100%;
`;

export const InputContainer = styled.View`
  margin-bottom: 28px;
`;

export const InputLabel = styled.Text`
  color: #fff;
  font-size: 12px;
  line-height: 12px;
`;

export const Input = styled(TextInput).attrs<InputProps>(props => ({
  underlineColor: props.isErrored ? '#FF7474' : '#ffffff73',
  mode: 'flat',
  theme: {
    colors: {
      primary: '#6f4fa2',
      text: '#ffffff73',
      placeholder: props.isErrored ? '#FF7474' : '#fff',
      background: 'transparent',
    },
  },
}))<InputProps>`
  font-size: 14px;
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
    borderRadius: 2,
  },
})`
  width: 100%;
`;

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
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#fff',
  },
})`
  width: 100%;
`;
