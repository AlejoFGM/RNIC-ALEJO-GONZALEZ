import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import TaskList from './src/components/task-list';
import {ThemeProvider} from 'styled-components/native';
import {myTheme} from './src/constants/theme';

function App(): JSX.Element {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return (
    <ThemeProvider theme={myTheme}>
      <TaskList />
    </ThemeProvider>
  );
}

export default App;
