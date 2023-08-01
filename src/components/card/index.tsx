import React, {useContext} from 'react';
import {DataCard, ImagesType} from '../../types/types';
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
import ToggleRigh from '../../assets/icons/toggle-right.svg';
import ToggleLeft from '../../assets/icons/toggle-left.svg';
import {TaskListContext} from '../../constants/provider';

const Card = (props: DataCard) => {
  const {data} = props;
  const {description, title, complete, image, id, date} = data;
  const {taskListProv, setTaskListProv} = useContext(TaskListContext)!;

  const onTogglePress = () => {
    const updatedTaskList = taskListProv.map(task => {
      if (task.id === id) {
        return {...task, complete: !task.complete};
      }
      return task;
    });
    setTaskListProv(updatedTaskList);
  };

  const imagesMapping: ImagesType = {
    super: require('../../assets/images/supermercado.png'),
    pesas: require('../../assets/images/pesas.png'),
    limpieza: require('../../assets/images/limpieza.png'),
  };

  const imageRoute = image ? imagesMapping[image] : null;

  return (
    <BorderContainer>
      <CardContainer state={complete}>
        <ContainerText>
          <CardTitle>{title}</CardTitle>
          {imageRoute ? (
            <ImageContainer>
              <ImageCard alt={'card_image'} source={imageRoute} />
            </ImageContainer>
          ) : null}
          <CardDescription>{description}</CardDescription>
          <CardDescription>
            {date ? `Limit Date: ${date}` : null}
          </CardDescription>
        </ContainerText>
        <ButtonsContainer>
          <TouchableButton onPress={onTogglePress}>
            {complete ? (
              <ToggleRigh
                width={30}
                height={30}
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
