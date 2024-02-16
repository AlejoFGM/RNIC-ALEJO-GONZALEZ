import React, {useContext} from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Cards, RouteParamList, Routes} from '../../types/types';
import Card from '../card';
import {
  KeyboardView,
  Wrapper,
  Main,
  ListHeader,
  ListEmpty,
  TitleList,
} from './styles';
import {TaskListContext} from '../../constants/provider';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

type ListScreen = BottomTabScreenProps<RouteParamList, Routes.LIST>;

function TaskList({navigation}: ListScreen): JSX.Element {
  const {taskListProv} = useContext(TaskListContext)!;

  const isAndroid = Platform.OS === 'android';

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

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Wrapper>
          <StatusBar
            barStyle={isAndroid ? 'dark-content' : 'light-content'}
            backgroundColor={isAndroid ? 'white' : 'black'}
          />
          <Main
            data={taskListProv}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(Routes.EDIT_TASK, {
                    data: item as Cards,
                  })
                }>
                <Card data={item as Cards} />
              </TouchableOpacity>
            )}
            ListEmptyComponent={emptyList}
            ListHeaderComponent={listHeader}
          />
        </Wrapper>
      </KeyboardView>
    </TouchableWithoutFeedback>
  );
}

export default TaskList;
