import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {ThemeProvider} from 'styled-components/native';
import {myTheme} from './src/constants/theme';
import {NavigationContainer} from '@react-navigation/native';
import NestedNavigators from './src/navigation/nested-navigators';
import {TaskListProvider} from './src/constants/provider';

function App(): JSX.Element {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return (
    <TaskListProvider>
      <ThemeProvider theme={myTheme}>
        <NavigationContainer>
          <NestedNavigators />
        </NavigationContainer>
      </ThemeProvider>
    </TaskListProvider>
  );
}

export default App;
