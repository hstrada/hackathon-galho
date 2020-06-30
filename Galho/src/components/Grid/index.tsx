import React from 'react';

import { CustomGridProps } from './interface';

import { Custom } from './styles';

/**
    ```
      Example: <CustomGrid paddingTop="small" />
    ```
    Unit summary - none: `0`,
    xxs: `4`,
    extraSmall: `8`,
    small: `16`,
    medium: `24`,
    large: `32`,
    extraLarge: `80` */
const CustomGrid = ({
  children,
  flexDirection = 'column',
  justifyContent,
  alignItems,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  position,
  top,
  bottom,
  height,
  flex,
  backgroundColor,
  flexWrap,
  opacity,
  ...rest
}: CustomGridProps) => (
  <>
    <Custom
      {...rest}
      opacity={opacity}
      flexWrap={flexWrap}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      flex={flex}
      position={position}
      top={top}
      bottom={bottom}
      height={height}
      backgroundColor={backgroundColor}>
      <>{children}</>
    </Custom>
  </>
);

export default CustomGrid;
