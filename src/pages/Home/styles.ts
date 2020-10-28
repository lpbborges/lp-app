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

export const WelcomeText = styled.Text`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 700;
  color: #fff;
`;

export const Avatar = styled.Image`
  width: 54px;
  height: 54px;
  border-radius: 27px;
`;

export const Content = styled.View`
  margin-top: 24px;
  align-items: center;
`;

export const ContentCard = styled.View`
  width: 320px;
  height: 153px;
  background: #ff7474;
  border-radius: 6px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px 16px;
  margin-bottom: 16px;
`;

export const TopContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Counter = styled.Text`
  font-size: 48px;
  font-weight: 700;
  color: #fff;
`;

export const BottomContent = styled.View`
  margin-top: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Description = styled.Text`
  flex: 1;
  flex-wrap: wrap;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: #fff;
  margin-right: 16px;
`;
