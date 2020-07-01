import styled from 'styled-components/native';

import colors from '../../theme/colors';

import { StyledInputProps } from './interface';

export const getBorderColor = ({ isFocused }: StyledInputProps) => {
  if (!isFocused) {
    return colors.tertiary;
  } else {
    return colors.quaternary;
  }
};

export const Container = styled.View<StyledInputProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-left: ${({ theme }) => theme.units.spacing.medium}px;
  padding-right: ${({ theme }) => theme.units.spacing.medium}px;
  height: ${({ theme }) => theme.units.input.height}px;
  border-color: ${(props) => getBorderColor(props)};
  border-bottom-width: 2px;
`;

export const ContainerText = styled.TextInput`
  color: ${({ theme }) => theme.colors.text.fourth};
  font-size: ${(props) => props.theme.fonts.size.xxp}px;
  font-family: ${({ theme }) => theme.fonts.latoRegular};
`;
