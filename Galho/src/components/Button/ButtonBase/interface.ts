import { GestureResponderEvent } from 'react-native';

import { ColorsButtonOptions } from '../../../theme/colors';

export type Props = {
  text: string;
  disabled?: boolean;
  loading?: boolean;
  testID?: string;
  onPress: (event: GestureResponderEvent) => void;
  variant?: ColorsButtonOptions;
};

export type StyledProps = {
  variant: ColorsButtonOptions;
  disabled?: boolean;
};
