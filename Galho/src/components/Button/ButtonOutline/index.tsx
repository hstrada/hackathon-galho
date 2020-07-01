import React from 'react';

import { ActivityIndicator, GestureResponderEvent } from 'react-native';

import colors from '../../../theme/colors';

import { Props } from './interface';

import { Container, Label } from './styles';

const ButtonOutline = ({
  onPress,
  text,
  variant = 'outline',
  loading,
  testID = 'buttonOutline',
}: Props) => {
  const callOnPress = (e: GestureResponderEvent) => {
    if (!loading) {
      onPress(e);
    }
  };

  return (
    <Container variant={variant} onPress={callOnPress} testID={testID}>
      {loading ? (
        <ActivityIndicator
          testID="loadingIndicator"
          size="small"
          color={colors.tertiary}
        />
      ) : (
        <Label variant={variant}>{text}</Label>
      )}
    </Container>
  );
};

export default ButtonOutline;
