import React from 'react';

import { StatusBar } from 'react-native';

import colors from '../../theme/colors';

import Typography from '../Typography';

import { Wrapper, Container } from './styles';

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <StatusBar backgroundColor={colors.primary} barStyle="dark-content" />

        <Typography text="Left" />
        <Typography text="Right" />
      </Container>
    </Wrapper>
  );
};

export default Header;
