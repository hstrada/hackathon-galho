import React from 'react';

import { StatusBar, Image } from 'react-native';

import { useSelector } from 'react-redux';

import { getAchievements } from '../../store/ducks/achievements/selectors';

import colors from '../../theme/colors';

import Grid from '../Grid';

import Typography from '../Typography';

import { Wrapper, Container, AchievementIcon, ContainerIcon } from './styles';

const Header = () => {
  const { branch, leaf, tree } = useSelector(getAchievements);

  return (
    <Wrapper>
      <Container>
        <StatusBar backgroundColor={colors.primary} barStyle="dark-content" />

        <Image
          source={require('../../assets/imgs/achievements/library.png')}
          style={{ width: 35, height: 35 }}
        />
        <Grid flexDirection="row">
          <ContainerIcon>
            <AchievementIcon
              source={require('../../assets/imgs/achievements/tree.png')}
            />
            <Typography text={tree} color="white" fontSize="p" />
          </ContainerIcon>
          <Grid marginLeft="medium">
            <ContainerIcon>
              <AchievementIcon
                source={require('../../assets/imgs/achievements/branch.png')}
              />
              <Typography text={branch} color="white" fontSize="p" />
            </ContainerIcon>
          </Grid>
          <Grid marginLeft="medium">
            <ContainerIcon>
              <AchievementIcon
                source={require('../../assets/imgs/achievements/leaf.png')}
              />
              <Typography text={leaf} color="white" fontSize="p" />
            </ContainerIcon>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Header;
