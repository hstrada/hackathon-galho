import styled from 'styled-components/native';

import { UnitPropsSpacing } from '../../theme/units';

import { CustomGridProps, CustomProps } from './interface';

const DEFAULT_SPACING = 'none';
const DEFAULT_FLEX_DIRECTION = 'column';

const Grid = styled.View<CustomProps>`
  flex-direction: ${(props) => props.flexDirection || DEFAULT_FLEX_DIRECTION};
`;

const getSpacingUnity = (
  spacing: UnitPropsSpacing,
  property: keyof UnitPropsSpacing | 'auto' | undefined,
): string => {
  if (property === 'auto') {
    return property;
  }
  return `${spacing[property || DEFAULT_SPACING]}px`;
};

export const Custom = styled(Grid)<CustomGridProps>`
  margin-top: ${(props) =>
    getSpacingUnity(props.theme.units.spacing, props.marginTop)};
  margin-bottom: ${(props) =>
    getSpacingUnity(props.theme.units.spacing, props.marginBottom)};
  margin-left: ${(props) =>
    getSpacingUnity(props.theme.units.spacing, props.marginLeft)};
  margin-right: ${(props) =>
    getSpacingUnity(props.theme.units.spacing, props.marginRight)};
  padding-top: ${(props) =>
    getSpacingUnity(props.theme.units.spacing, props.paddingTop)};
  padding-bottom: ${(props) =>
    getSpacingUnity(props.theme.units.spacing, props.paddingBottom)};
  padding-left: ${(props) =>
    getSpacingUnity(props.theme.units.spacing, props.paddingLeft)};
  padding-right: ${(props) =>
    getSpacingUnity(props.theme.units.spacing, props.paddingRight)};
  position: ${(props) => props.position || 'relative'};
  ${(props) =>
    props.position === 'absolute' && props.top && { top: props.top }};
  ${(props) =>
    props.position === 'absolute' && props.bottom && { bottom: props.bottom }}
  height: ${(props) => (props.height ? props.height + 'px' : 'auto')};
  z-index: ${(props) => (props.position === 'absolute' ? '10' : '1')};
  ${(props) => props.flex && { flex: props.flex }}
  ${(props) =>
    props.backgroundColor && {
      backgroundColor: props.theme.colors.background[props.backgroundColor],
    }}
  ${(props) => props.justifyContent};
  ${(props) => props.flexWrap};
  ${(props) => props.opacity};
`;
