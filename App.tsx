import React from 'react';

import {StatusBar} from 'react-native';

import Stopwatch from '@screens/Stopwatch';

import TimeProvider from '@contexts/TimeContext';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <TimeProvider>
        <Stopwatch />
      </TimeProvider>
    </>
  );
};

export default App;
