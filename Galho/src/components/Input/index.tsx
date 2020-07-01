import React, { useState } from 'react';

import { FunctionComponent } from 'react';

import colors from '../../theme/colors';

import { InputProps } from './interface';

import { Container, ContainerText } from './styles';

const InputWithIcon: FunctionComponent<InputProps> = ({
  value,
  testID,
  maxLength,
  placeholder,
  placeholderTextColor = colors.tertiary,
  onChangeText,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const changeFocus = () => {
    setIsFocused(!isFocused);
  };

  return (
    <Container isFocused={isFocused}>
      <ContainerText
        testID={testID}
        underlineColorAndroid="transparent"
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onFocus={() => changeFocus()}
        onBlur={() => changeFocus()}
        onChangeText={onChangeText}
        maxLength={maxLength}
        {...rest}
      />
    </Container>
  );
};

export default InputWithIcon;
