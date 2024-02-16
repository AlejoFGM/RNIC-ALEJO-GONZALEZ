import React, {RefObject, useContext, useRef, useState} from 'react';
import {Wrapper, Footer, Input, Button, ButtonText} from './styles';
import Check from '../../assets/icons/check-circle.svg';
import {TaskListContext} from '../../constants/provider';
import {TextInput} from 'react-native';
import DatePicker from 'react-native-date-picker';

const AddTask = () => {
  const {taskListProv, setTaskListProv} = useContext(TaskListContext)!;
  const [inputTitle, setInputTitle] = useState<string>('');
  const [inputDescription, setInputDescription] = useState<string>('');
  const [inputDate, setInputDate] = useState(new Date());

  const secondInput: RefObject<TextInput> = useRef(null);

  const onSubmitPress = () => {
    setTaskListProv([
      ...taskListProv,
      {
        title: inputTitle,
        description: inputDescription,
        complete: false,
        date: inputDate.toDateString(),
        id: taskListProv.length,
      },
    ]);
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
        <DatePicker date={inputDate} onDateChange={setInputDate} />
        <Button onPress={onSubmitPress}>
          <ButtonText>Submit</ButtonText>
          <Check stroke={'black'} />
        </Button>
      </Footer>
    </Wrapper>
  );
};

export default AddTask;
