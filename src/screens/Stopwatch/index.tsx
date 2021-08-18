import React, {useContext, useEffect, useState} from 'react';
import SoundPlayer from 'react-native-sound-player';
import * as themes from '../../themes.json';

import {
  Container,
  StopwatchButton,
  StopwatchButtonText,
  Time,
  TimeAdd,
  TimeAddText,
  TimeButtons,
  TimeChildren,
  TimeSplitChildren,
} from './stopwatch.styles';

import {TimeContext} from '@contexts/TimeContext';

import Switch from '@components/Switch';

import useTheme from '@hooks/useTheme';

import {saveToStorage} from '@utils/storage';
import {ThemeProvider} from 'styled-components/native';
import {StatusBar} from 'react-native';

const Stopwatch = () => {
  saveToStorage('all_themes', themes);

  //useTheme
  const {theme, themeLoaded, toggleTheme} = useTheme();

  //useContexts
  const {
    time,
    hours,
    minutes,
    seconds,
    isActive,
    hasFinished,
    setTime,
    startTime,
    resetTime,
  } = useContext(TimeContext);

  //useState
  const [switchIsActive, setSwitchIsActive] = useState(true);
  const [selectedTheme, setSelectedTheme] = useState<ITheme>(theme);

  const [hourLeft, hourRight] = String(hours).padStart(2, '0').split('');
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  //functions
  function handleStartTime() {
    startTime();
  }

  function handleResetTime() {
    resetTime();
  }

  function handleAddtime(addTime: number) {
    setTime(time + addTime);
  }

  //useEffects

  useEffect(() => {
    setSelectedTheme(theme);
  }, [theme, themeLoaded]);

  useEffect(() => {
    try {
      if (hasFinished) {
        SoundPlayer.playSoundFile('alarm', 'mp3');
      }
    } catch (err) {}
  }, [hasFinished]);

  useEffect(() => {
    toggleTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [switchIsActive]);

  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme as ITheme}>
          <StatusBar
            backgroundColor={selectedTheme.colors.statusBar.background}
            barStyle={selectedTheme.colors.statusBar.content}
          />
          <Container>
            <Switch onChangeActive={active => setSwitchIsActive(active)} />
            <Time>
              <TimeChildren>{hourLeft}</TimeChildren>
              <TimeChildren>{hourRight}</TimeChildren>
              <TimeSplitChildren>:</TimeSplitChildren>
              <TimeChildren>{minuteLeft}</TimeChildren>
              <TimeChildren>{minuteRight}</TimeChildren>
              <TimeSplitChildren>:</TimeSplitChildren>
              <TimeChildren>{secondLeft}</TimeChildren>
              <TimeChildren>{secondRight}</TimeChildren>
            </Time>
            <StopwatchButton
              onPress={isActive ? handleResetTime : handleStartTime}>
              <StopwatchButtonText>
                {isActive ? 'Zerar' : 'Iniciar'}
              </StopwatchButtonText>
            </StopwatchButton>
            {!isActive && (
              <TimeButtons>
                <TimeAdd onPress={() => handleAddtime(1 * 3600)}>
                  <TimeAddText>+1h</TimeAddText>
                </TimeAdd>
                <TimeAdd onPress={() => handleAddtime(10 * 60)}>
                  <TimeAddText>+10m</TimeAddText>
                </TimeAdd>
                <TimeAdd onPress={() => handleAddtime(5 * 60)}>
                  <TimeAddText>+5m</TimeAddText>
                </TimeAdd>
                <TimeAdd onPress={() => handleAddtime(1 * 60)}>
                  <TimeAddText>+1m</TimeAddText>
                </TimeAdd>
                <TimeAdd onPress={() => handleAddtime(1)}>
                  <TimeAddText>+1s</TimeAddText>
                </TimeAdd>
              </TimeButtons>
            )}
          </Container>
        </ThemeProvider>
      )}
    </>
  );
};

export default Stopwatch;
