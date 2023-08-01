import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListScreen from '../../screens/list-screen';
import AddTask from '../../screens/add-task';
import EditTask from '../../screens/edit-task';
import ListIcon from '../../assets/icons/list.svg';
import AddIcon from '../../assets/icons/plus.svg';
import {RouteParamList, Routes} from '../../types/types';

const Stack = createNativeStackNavigator<RouteParamList>();
const Tab = createBottomTabNavigator<RouteParamList>();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={Routes.LIST_SCREEN}
      component={ListScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen name={Routes.EDIT_TASK} component={EditTask} />
  </Stack.Navigator>
);
const NestedNavigators = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({focused}) => {
          if (route.name === Routes.LIST) {
            return <ListIcon stroke={focused ? 'gray' : 'lightgray'} />;
          }
          if (route.name === Routes.ADD_TASK) {
            return <AddIcon stroke={focused ? 'gray' : 'lightgray'} />;
          }
        },
      })}>
      <Tab.Screen
        name={Routes.LIST}
        component={StackNavigator}
        options={{headerShown: false}}
      />
      <Tab.Screen name={Routes.ADD_TASK} component={AddTask} />
    </Tab.Navigator>
  );
};

export default NestedNavigators;
