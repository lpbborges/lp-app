import { TextInputProps } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Theme } from 'react-native-paper/lib/typescript/src/types';
import styled from 'styled-components/native';

interface InputProps extends TextInputProps {
  isErrored: boolean;
  theme: Theme;
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

export const Input = styled(TextInput).attrs<InputProps>(props => ({
  underlineColor: props.isErrored
    ? props.theme.colors.failure
    : props.theme.colors.placeholder,
  mode: 'flat',
  theme: {
    colors: {
      primary: props.theme.colors.accent,
      text: props.theme.colors.placeholder,
      placeholder: props.isErrored
        ? props.theme.colors.failure
        : props.theme.colors.text,
      background: 'transparent',
    },
  },
}))<InputProps>`
  font-size: 14px;
`;

export const ConcludeButton = styled(Button).attrs<{ theme: Theme }>(props => ({
  upperCase: true,
  color: props.theme.colors.accent,
  labelStyle: {
    color: props.theme.colors.text,
    fontSize: 14,
    fontWeight: '500',
  },
  contentStyle: {
    height: 36,
    borderRadius: 2,
  },
}))`
  width: 100%;
`;

export const CancelButton = styled(Button).attrs<{ theme: Theme }>(props => ({
  upperCase: true,
  color: 'transparent',
  marginTop: 8,
  labelStyle: {
    color: props.theme.colors.text,
    fontSize: 14,
    fontWeight: '500',
  },
  contentStyle: {
    height: 36,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: props.theme.colors.text,
  },
}))`
  width: 100%;
`;
