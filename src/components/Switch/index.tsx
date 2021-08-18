import React, {useEffect, useRef, useState} from 'react';
import {Animated} from 'react-native';

import {Circle, Container} from './switch.styles';

interface ISwitch {
  onChangeActive: (active: boolean) => void;
}

const Switch = ({onChangeActive}: ISwitch) => {
  //Animated
  const translateAnim = useRef(new Animated.Value(0)).current;

  const translateToLeft = () => {
    Animated.timing(translateAnim, {
      useNativeDriver: true,
      toValue: 0,
      duration: 300,
    }).start();
  };

  const translateToRight = () => {
    Animated.timing(translateAnim, {
      useNativeDriver: true,
      toValue: 50,
      duration: 300,
    }).start();
  };

  //useStates
  const [isActive, setIsActive] = useState(true);

  //functoins
  function handleToggleActive() {
    setIsActive(!isActive);
    if (!isActive) {
      translateToLeft();
    } else {
      translateToRight();
    }
    onChangeActive(isActive);
  }

  useEffect(() => {
    onChangeActive(isActive);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

  return (
    <Container onPress={handleToggleActive}>
      <Circle
        style={{transform: [{translateX: translateAnim}]}}
        isActive={isActive}
      />
    </Container>
  );
};

export default Switch;
