import React from 'react';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import TaskList from '../../components/task-list';
import {RouteParamList, Routes} from '../../types/types';

type TabListScreen = BottomTabScreenProps<RouteParamList, Routes.LIST_SCREEN>;

const ListScreen = ({navigation}: TabListScreen) => {
  return <TaskList navigation={navigation} />;
};

export default ListScreen;
