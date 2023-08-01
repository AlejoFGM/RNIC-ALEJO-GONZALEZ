import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {Dispatch, SetStateAction} from 'react';
import {ImageSourcePropType} from 'react-native';

type TabListScreen = BottomTabScreenProps<RouteParamList, Routes.LIST_SCREEN>;
export interface Cards {
  title: string;
  description: string;
  complete: boolean;
  image?: string;
  date: string;
  id: number;
}

export interface DataCard {
  data: Cards;
}

export enum Routes {
  LIST_SCREEN = 'LIST_SCREEN',
  ADD_TASK = 'ADD TASK',
  EDIT_TASK = 'EDIT TASK',
  LIST = 'LIST',
}

export type RouteParamList = {
  [Routes.LIST_SCREEN]: undefined;
  [Routes.ADD_TASK]: undefined;
  [Routes.EDIT_TASK]: {
    data: Cards;
  };
  [Routes.LIST]: undefined;
};

export interface CardContextType {
  taskListProv: Cards[] | [];
  setTaskListProv: Dispatch<SetStateAction<Cards[]>>;
}

export interface TaskListProp {
  navigation: TabListScreen;
}

export interface ImagesType {
  [key: string]: ImageSourcePropType;
}
