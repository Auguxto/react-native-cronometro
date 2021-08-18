import styled from 'styled-components/native';
import {Animated} from 'react-native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  position: absolute;

  top: 20px;
  right: 20px;

  width: 90px;
  height: 40px;

  justify-content: center;

  background-color: ${props => props.theme.colors.switch.background};

  border-radius: 40px;
`;

export const Circle = styled(Animated.View)<{
  isActive: boolean;
}>`
  width: 30px;
  height: 30px;

  margin: 0 5px;

  background-color: ${props => props.theme.colors.switch.circle};

  border-radius: 30px;
`;
