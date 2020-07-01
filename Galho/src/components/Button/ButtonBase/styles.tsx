import styled from 'styled-components/native';

import { StyledProps } from './interface';

export const Container = styled.TouchableOpacity<StyledProps>`
  /* align-items: center; */
  background-color: ${({ theme, variant }) =>
    theme.colors.button[variant].backgroundColor};
  height: ${({ theme }) => theme.units.button.height}px;
  text-align: center;
  border-radius: ${({ theme }) => theme.units.borderRadius.extraSmall}px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Label = styled.Text<StyledProps>`
  color: ${({ theme, variant }) => theme.colors.button[variant].textColor};
  font-size: ${({ theme }) => theme.fonts.size.m}px;
  font-family: ${({ theme }) => theme.fonts.latoBold};
`;
