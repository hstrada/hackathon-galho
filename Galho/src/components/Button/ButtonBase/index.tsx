import React from 'react';

import { ActivityIndicator, GestureResponderEvent } from 'react-native';

import colors from '../../../theme/colors';

import { Props } from './interface';

import { Container, Label } from './styles';

/**
 *
    ```
      Example: <ButtonBase onPress={fn} text="string" />
    ```
 * @param { onPress, text, variant, loading }
 */
const ButtonBase = (props: Props) => {
  const { onPress, text, variant = 'base', loading, disabled = false } = props;

  const callOnPress = (e: GestureResponderEvent) => {
    if (!loading && !disabled) {
      onPress(e);
    }
  };

  return (
    <Container variant={variant} onPress={callOnPress} disabled={disabled}>
      {loading ? (
        <ActivityIndicator size="small" color={colors.white} />
      ) : (
        <Label variant={variant}>{text}</Label>
      )}
    </Container>
  );
};

export default ButtonBase;
