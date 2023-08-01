import React, {useState, createContext, useEffect, ReactNode} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {mockedList} from '.';
import {CardContextType, Cards} from '../types/types';

export const TaskListContext = createContext<CardContextType | null>(null);

export const TaskListProvider = ({children}: {children: ReactNode}) => {
  const [taskListProv, setTaskListProv] = useState<Cards[]>([]);

  useEffect(() => {
    loadDataFromAsyncStorage();
  }, []);

  useEffect(() => {
    saveDataToAsyncStorage(taskListProv);
  }, [taskListProv]);

  const saveDataToAsyncStorage = async (dataToSave: Cards[]) => {
    try {
      const jsonData = JSON.stringify(dataToSave);
      await AsyncStorage.setItem('data', jsonData);
    } catch (error) {
      console.error('error:', error);
    }
  };

  const loadDataFromAsyncStorage = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('data');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        setTaskListProv(parsedData);
      } else {
        setTaskListProv(mockedList);
      }
    } catch (error) {
      console.error('error:', error);
    }
  };

  return (
    <TaskListContext.Provider value={{taskListProv, setTaskListProv}}>
      {children}
    </TaskListContext.Provider>
  );
};
