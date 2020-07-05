import { ImageSourcePropType } from 'react-native';

export interface StyledProps {
  progress: number | string;
}

export interface Props {
  label: string;
  navigation: any;
  imgSource: ImageSourcePropType;
  progress: string | number;
}
