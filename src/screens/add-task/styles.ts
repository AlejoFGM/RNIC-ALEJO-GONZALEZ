import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  align-content: center;
`;

export const Footer = styled.View`
  /* padding-top: 20px; */
  align-items: center;
  background-color: ${({theme}) => theme.colors.white};
`;

export const Input = styled.TextInput`
  padding: 10px;
  border-width: 1px;
  color: ${({theme}) => theme.colors.black};
  font-family: 'Lato-Regular';
  background-color: ${({theme}) => theme.colors.white};
  border-color: #cd5c5c;
  border-radius: 10px;
  width: 75%;
  margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px;
  background-color: #cd5c5c;
  border-color: ${({theme}) => theme.colors.black};
  border-radius: 10px;
  width: 30%;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 15px;
  font-family: 'Lato-Bold';
  color: ${({theme}) => theme.colors.black};
  padding-right: 5px;
`;
