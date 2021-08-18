import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.colors.background};
`;

export const Time = styled.View`
  width: 90%;

  justify-content: center;
  align-items: center;

  flex-direction: row;

  margin-bottom: 30%;
`;

export const TimeChildren = styled.Text`
  font-family: 'Inter-Thin';
  font-size: 80px;

  color: ${props => props.theme.colors.text};
`;

export const TimeSplitChildren = styled.Text`
  font-family: 'Inter-Thin';
  font-size: 80px;

  color: ${props => props.theme.colors.text};
`;

export const StopwatchButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  width: 90%;
  height: 80px;

  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.colors.buttonBackground};

  border-radius: 20px;
`;

export const StopwatchButtonText = styled.Text`
  font-family: 'Inter-Thin';
  font-size: 48px;

  color: ${props => props.theme.colors.buttonText};
`;

export const TimeButtons = styled.View`
  display: flex;

  flex-direction: row;

  padding-top: 20px;
`;

export const TimeAdd = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  padding: 10px;

  margin: 0 5px;

  border-width: 1px;
  border-color: ${props => props.theme.colors.buttonBackground};
  border-radius: 10px;
`;

export const TimeAddText = styled.Text`
  color: ${props => props.theme.colors.text};
`;
