import {DefaultTheme} from 'styled-components';
import styled from 'styled-components/native';

export const CardContainer = styled.View`
  margin: 10px;
  padding: 5px;
  border-width: 5px;
  border-color: ${({theme}: DefaultTheme) => theme.colors.primary};
  border-style: ${(props: {state: boolean}) =>
    props.state ? 'solid' : 'dotted'};
`;

export const BorderContainer = styled.View`
  border-radius: 40px;
  overflow: hidden;
`;

export const ContainerText = styled.View`
  padding: 10px;
`;

export const CardTitle = styled.Text`
  font-weight: 900;
  font-size: 25px;
  font-family: 'Lato-Bold';
  color: ${({theme}: DefaultTheme) => theme.colors.black};
`;

export const CardDescription = styled.Text`
  margin-top: 5px;
  font-weight: 500;
  font-size: 18px;
  font-family: 'Lato-Regular';
  color: black;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 10px;
`;

export const TouchableButton = styled.TouchableOpacity`
  padding: 5px;
`;

export const ImageCard = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ImageContainer = styled.View`
  align-items: center;
  padding: 15px;
`;
