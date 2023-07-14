import React, {useState} from 'react';
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
} from 'react-native';

import Card from './src/components/card';

function App(): JSX.Element {
  const [arrayCards, setArrayCards] = useState<any>([]);
  const [inputTitle, setInputTitle] = useState<string | undefined>();
  const [inputDescription, setInputDescription] = useState<
    string | undefined
  >();

  const emptyList = <Text>No data here.</Text>;

  const onSubmitPress = () => {
    setArrayCards([
      ...arrayCards,
      {title: inputTitle, description: inputDescription},
    ]);
    setInputTitle(undefined);
    setInputDescription(undefined);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.wrapper}>
        <FlatList
          style={styles.main}
          data={arrayCards}
          renderItem={({item}) => (
            <Card title={item.title} description={item.description} />
          )}
          ListEmptyComponent={emptyList}
        />
        <View style={styles.footer}>
          <TextInput
            style={styles.input}
            placeholder="Title"
            value={inputTitle}
            onChangeText={setInputTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={inputDescription}
            onChangeText={setInputDescription}
          />
          <TouchableOpacity style={styles.button} onPress={onSubmitPress}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  main: {
    flex: 1,
    padding: 10,
  },
  footer: {
    marginTop: 10,
    paddingTop: 20,
    alignItems: 'center',
  },
  input: {
    padding: 10,
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    width: '75%',
    marginBottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: 'blue',
    borderWidth: 1,
    borderColor: 'black',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    width: '75%',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default App;
