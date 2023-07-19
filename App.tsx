import React, {RefObject, useEffect, useRef, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  KeyboardAvoidingView,
  Platform,
  AppState,
  StatusBar,
} from 'react-native';

import Card from './src/components/card';
import {mockedList} from './src/constants';
import {CardList} from './src/types/types';

function App(): JSX.Element {
  const [arrayCards, setArrayCards] = useState<CardList[]>(mockedList);
  const [inputTitle, setInputTitle] = useState<string>('');
  const [inputDescription, setInputDescription] = useState<string>('');

  const secondInput: RefObject<TextInput> = useRef(null);

  const isAndroid = Platform.OS === 'android';

  const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
    },
    main: {
      flex: 1,
      padding: 10,
      backgroundColor: isAndroid ? 'white' : '#131311',
    },
    footer: {
      paddingTop: 20,
      alignItems: 'center',
      backgroundColor: isAndroid ? 'white' : '#131311',
    },
    input: {
      padding: 10,
      borderWidth: 1,
      color: isAndroid ? 'black' : 'white',
      backgroundColor: isAndroid ? 'white' : '#131311',
      borderColor: '#CD5C5C',
      borderRadius: 10,
      width: '75%',
      marginBottom: 20,
    },
    button: {
      padding: 10,
      backgroundColor: '#CD5C5C',
      borderRadius: 10,
      borderColor: 'black',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 10,
      width: '30%',
      alignItems: 'center',
      marginBottom: 10,
    },
    buttonText: {
      fontSize: 15,
      color: 'black',
    },
    listHeader: {
      alignItems: 'center',
      padding: 5,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 30,
      color: isAndroid ? 'black' : '#E3E3D6',
    },
    listEmpty: {
      alignItems: 'center',
      alignContent: 'center',
    },
  });

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
    <View style={styles.listHeader}>
      <Text style={styles.title}>Task list</Text>
    </View>
  );
  const emptyList = (
    <View style={styles.listEmpty}>
      <Text>No data here.</Text>
    </View>
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
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.wrapper}>
        <SafeAreaView style={styles.wrapper}>
          <StatusBar
            barStyle={isAndroid ? 'dark-content' : 'light-content'}
            backgroundColor={isAndroid ? 'white' : 'black'}
          />
          <FlatList
            style={styles.main}
            data={arrayCards}
            renderItem={({item}) => (
              <Card
                title={item.title}
                description={item.description}
                complete={item.complete}
              />
            )}
            ListEmptyComponent={emptyList}
            ListHeaderComponent={listHeader}
          />
          <View style={styles.footer}>
            <TextInput
              style={styles.input}
              placeholder="Title"
              value={inputTitle}
              onChangeText={setInputTitle}
              returnKeyType="next"
              onSubmitEditing={() => secondInput.current?.focus()}
              placeholderTextColor={isAndroid ? 'black' : '#E3E3D6'}
            />
            <TextInput
              style={styles.input}
              placeholder="Description"
              value={inputDescription}
              onChangeText={setInputDescription}
              ref={secondInput}
              returnKeyType="done"
              placeholderTextColor={isAndroid ? 'black' : '#E3E3D6'}
            />
            <TouchableOpacity style={styles.button} onPress={onSubmitPress}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

export default App;
