import styled from 'styled-components/native';

import { StyledProps } from './interface';

export const Container = styled.TouchableOpacity<StyledProps>`
  background-color: ${({ theme, variant }) =>
    theme.colors.button[variant].backgroundColor};
  height: ${({ theme }) => theme.units.button.height}px;
  text-align: center;
  border-radius: ${({ theme }) => theme.units.borderRadius.extraSmall}px;
  border-color: ${({ theme, variant }) =>
    theme.colors.button[variant].borderColor};
  border-width: 2px;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text<StyledProps>`
  color: ${({ theme, variant }) => theme.colors.button[variant].textColor};
  font-size: ${({ theme }) => theme.fonts.size.m}px;
  font-family: ${({ theme }) => theme.fonts.latoBold};
`;
