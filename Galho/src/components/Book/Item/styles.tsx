import styled from 'styled-components/native';

import colors from '../../../theme/colors';

import { StyledProps } from './interface';

export const Container = styled.View.attrs({
  shadowColor: colors.tertiary,
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.21,
  shadowRadius: 11.95,
  elevation: 7,
})`
  width: 100%;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: ${({ theme }) => theme.units.borderRadius.small}px;
  padding: 20px;
  margin-bottom: ${({ theme }) => theme.units.spacing.xxlarge}px;
  display: flex;
  flex-direction: row;
`;

export const BookImage = styled.Image`
  height: 100%;
  width: 30%;
  border-radius: 10px;
`;

export const ContainerPercentage = styled.View`
  width: 100%;
  height: 10px;
  border-radius: ${({ theme }) => theme.units.borderRadius.small}px;
  background-color: ${({ theme }) => theme.colors.background.disabled};
`;

export const Percentage = styled.View<StyledProps>`
  width: ${({ progress }) => progress + '%'};
  height: 100%;
  border-radius: ${({ theme }) => theme.units.borderRadius.small};
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;
