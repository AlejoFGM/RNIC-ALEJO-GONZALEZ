import React, {useState} from 'react';
import {Cards} from '../../types/types';
import {
  CardContainer,
  ContainerText,
  CardTitle,
  CardDescription,
  ButtonsContainer,
  BorderContainer,
  ImageCard,
  ImageContainer,
  TouchableButton,
} from './styles';
import Edit from '../../assets/icons/edit-2.svg';
import Remove from '../../assets/icons/trash-2.svg';
import ToggleRigh from '../../assets/icons/toggle-right.svg';
import ToggleLeft from '../../assets/icons/toggle-left.svg';

const Card = (props: Cards) => {
  const {description, title, complete, image} = props;
  const [state, setState] = useState<boolean>(complete);

  return (
    <BorderContainer>
      <CardContainer state={state}>
        <ContainerText>
          <CardTitle>{title}</CardTitle>
          {image ? (
            <ImageContainer>
              <ImageCard alt={'card_image'} source={image} />
            </ImageContainer>
          ) : null}
          <CardDescription>{description}</CardDescription>
        </ContainerText>
        <ButtonsContainer>
          <TouchableButton>
            <Remove width={30} height={30} fill={'#CD5C5C'} stroke={'black'} />
          </TouchableButton>
          <TouchableButton>
            <Edit width={30} height={30} fill={'#CD5C5C'} stroke={'black'} />
          </TouchableButton>
          <TouchableButton onPress={() => setState(!state)}>
            {state ? (
              <ToggleRigh
                width={60}
                height={60}
                fill={'#CD5C5C'}
                stroke={'black'}
              />
            ) : (
              <ToggleLeft
                width={30}
                height={30}
                stroke={'black'}
                fill={'lightgrey'}
              />
            )}
          </TouchableButton>
        </ButtonsContainer>
      </CardContainer>
    </BorderContainer>
  );
};

export default Card;
