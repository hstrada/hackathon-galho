import styled from 'styled-components/native';

import { Platform, PlatformOSType } from 'react-native';

const USER_PLATFORM = Platform.OS;

const getHeaderSpacingStyle = (platform: PlatformOSType) => {
  if (platform === 'ios') {
    return {
      paddingTop: 30,
    };
  } else {
    return {
      paddingTop: 3,
    };
  }
};

export const Wrapper = styled.View`
  ${getHeaderSpacingStyle(USER_PLATFORM)}
`;

export const Container = styled.View`
  height: 80px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.text.tertiary};
`;

export const AchievementIcon = styled.Image``;

export const ContainerIcon = styled.View`
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`;
