import React from 'react';

import { PropsBaseTitle } from './interface';

import { BaseTitle } from './styles';

/**
    ```
      Example: <Typography onPress={onPress} text="Press" fontSize="m" color="primary" />
    ```
*/
const Typography = ({
  text,
  color,
  weight,
  align,
  lineHeight,
  textDecorationStyle,
  textDecorationStyleColor,
  onPress,
  numberOfLines,
  marginLeft,
  marginRight,
  fontSize,
  fontFamily,
  ...rest
}: PropsBaseTitle) => (
  <BaseTitle
    {...rest}
    fontFamily={fontFamily}
    marginLeft={marginLeft}
    marginRight={marginRight}
    numberOfLines={numberOfLines}
    fontSize={fontSize}
    color={color}
    weight={weight}
    align={align}
    lineHeight={lineHeight}
    onPress={onPress}
    textDecorationStyle={textDecorationStyle}
    textDecorationStyleColor={textDecorationStyleColor}>
    {text}
  </BaseTitle>
);

export default Typography;
