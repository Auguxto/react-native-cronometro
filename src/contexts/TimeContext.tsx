import React, {useState, useEffect, createContext, ReactNode} from 'react';
import SoundPlayer from 'react-native-sound-player';

interface ITimeContext {
  hours: number;
  minutes: number;
  seconds: number;
  time: number;
  hasFinished: boolean;
  isActive: boolean;
  setTime: (time: number) => void;
  startTime: () => void;
  resetTime: () => void;
}

interface ITimeProvider {
  children: ReactNode;
}

export const TimeContext = createContext({} as ITimeContext);

let timeTimeout: NodeJS.Timeout;

const TimeProvider = ({children}: ITimeProvider) => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  //functions
  function startTime() {
    if (time === 0) {
      setTime(1 * 60);
    }
    setIsActive(true);
  }

  function resetTime() {
    clearTimeout(timeTimeout);
    setIsActive(false);
    setHasFinished(false);
    setTime(0);
  }

  //useEffects
  useEffect(() => {
    if (isActive && time > 0) {
      timeTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      try {
        SoundPlayer.playSoundFile('alarm', 'mp3');
      } catch (err) {}
    }
  }, [isActive, time]);

  return (
    <TimeContext.Provider
      value={{
        hours,
        minutes,
        seconds,
        time,
        hasFinished,
        isActive,
        setTime,
        startTime,
        resetTime,
      }}>
      {children}
    </TimeContext.Provider>
  );
};

export default TimeProvider;
