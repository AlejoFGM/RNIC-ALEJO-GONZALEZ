import React, {RefObject, useEffect, useRef, useState} from 'react';
import {
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  AppState,
  StatusBar,
} from 'react-native';
import {CardList} from '../../types/types';
import {mockedList} from '../../constants';
import Card from '../card';
import {
  KeyboardView,
  Wrapper,
  Main,
  Footer,
  Input,
  Button,
  ButtonText,
  ListHeader,
  ListEmpty,
  TitleList,
} from './styles';
import Check from '../../assets/icons/check-circle.svg';

function TaskList(): JSX.Element {
  const [arrayCards, setArrayCards] = useState<CardList[]>(mockedList);
  const [inputTitle, setInputTitle] = useState<string>('');
  const [inputDescription, setInputDescription] = useState<string>('');

  const secondInput: RefObject<TextInput> = useRef(null);

  const isAndroid = Platform.OS === 'android';

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'background') {
        setArrayCards([]);
      }
    });
    return () => {
      subscription.remove();
    };
  }, []);

  const listHeader = (
    <ListHeader>
      <TitleList>Task list</TitleList>
    </ListHeader>
  );
  const emptyList = (
    <ListEmpty>
      <Text>No data here.</Text>
    </ListEmpty>
  );

  const onSubmitPress = () => {
    setArrayCards([
      ...arrayCards,
      {
        title: inputTitle,
        description: inputDescription,
        complete: false,
      },
    ]);
    setInputTitle('');
    setInputDescription('');
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Wrapper>
          <StatusBar
            barStyle={isAndroid ? 'dark-content' : 'light-content'}
            backgroundColor={isAndroid ? 'white' : 'black'}
          />
          <Main
            data={arrayCards}
            renderItem={({item}: any) => (
              <Card
                title={item.title}
                description={item.description}
                complete={item.complete}
                image={item.image}
              />
            )}
            ListEmptyComponent={emptyList}
            ListHeaderComponent={listHeader}
          />
          <Footer>
            <Input
              placeholder="Title"
              value={inputTitle}
              onChangeText={setInputTitle}
              returnKeyType="next"
              onSubmitEditing={() => secondInput.current?.focus()}
              placeholderTextColor={isAndroid ? 'black' : '#E3E3D6'}
            />
            <Input
              placeholder="Description"
              value={inputDescription}
              onChangeText={setInputDescription}
              ref={secondInput}
              returnKeyType="done"
              placeholderTextColor={isAndroid ? 'black' : '#E3E3D6'}
            />
            <Button onPress={onSubmitPress}>
              <ButtonText>Submit</ButtonText>
              <Check stroke={'black'} />
            </Button>
          </Footer>
        </Wrapper>
      </KeyboardView>
    </TouchableWithoutFeedback>
  );
}

export default TaskList;
