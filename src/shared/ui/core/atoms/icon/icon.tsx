import type { TIconVariants } from '@theme';

import Svg, { Path } from 'react-native-svg';
import { ICON_PATHS } from './variants';

export type TIconProps = {
  size?: number;
  color?: string;
  variant: TIconVariants;
};

export const Icon = ({ size = 24, color = '#C2C1C6', variant }: TIconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      testID={'Icon'}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d={ICON_PATHS[variant]}
        fill={color}
      />
    </Svg>
  );
};
