import React, {RefObject, useContext, useRef, useState} from 'react';
import {Wrapper, Footer, Input, Button, ButtonText} from './styles';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import Check from '../../assets/icons/check-circle.svg';
import {RouteParamList, Routes} from '../../types/types';
import {TaskListContext} from '../../constants/provider';
import {TextInput} from 'react-native';
import DatePicker from 'react-native-date-picker';

type EditScreen = BottomTabScreenProps<RouteParamList, Routes.EDIT_TASK>;

const EditTask = ({route}: EditScreen) => {
  const {data} = route.params;
  const {title, description, id, complete, date} = data;
  const {taskListProv, setTaskListProv} = useContext(TaskListContext)!;
  const [inputTitle, setInputTitle] = useState<string>(title);
  const [inputDescription, setInputDescription] = useState<string>(description);
  const [inputDate, setInputDate] = useState<Date>(new Date(date));

  const secondInput: RefObject<TextInput> = useRef(null);

  const onSubmitPress = () => {
    const editedTask = {
      title: inputTitle,
      description: inputDescription,
      complete: complete,
      date: inputDate.toDateString(),
      id: id,
    };
    const updatedTaskList = taskListProv.map(task => {
      if (task.id === id) {
        return {...task, ...editedTask};
      }
      return task;
    });
    setTaskListProv(updatedTaskList);
  };

  const onDeletePress = () => {
    const updatedTaskList = taskListProv.filter(task => task.id !== id);
    setTaskListProv(updatedTaskList);
    setInputTitle('');
    setInputDescription('');
  };

  return (
    <Wrapper>
      <Footer>
        <Input
          placeholder="Title"
          value={inputTitle}
          onChangeText={setInputTitle}
          returnKeyType="next"
          onSubmitEditing={() => secondInput.current?.focus()}
        />
        <Input
          placeholder="Description"
          value={inputDescription}
          onChangeText={setInputDescription}
          ref={secondInput}
          returnKeyType="done"
        />
        {date ? (
          <DatePicker date={inputDate} onDateChange={setInputDate} />
        ) : null}
        <Button onPress={onSubmitPress}>
          <ButtonText>Submit</ButtonText>
          <Check stroke={'black'} />
        </Button>
        <Button onPress={onDeletePress}>
          <ButtonText>Delete</ButtonText>
          <Check stroke={'black'} />
        </Button>
      </Footer>
    </Wrapper>
  );
};

export default EditTask;
