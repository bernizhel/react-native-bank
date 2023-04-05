import type { ReactNode } from 'react';

import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type ScreenWrapperProps = {
  component: ReactNode;
  headerShown?: boolean;
};

export const ScreenWrapper = ({
  component,
  headerShown = false,
}: ScreenWrapperProps) => {
  const { top } = useSafeAreaInsets();
  return <View style={{ top: !headerShown ? top : 0 }}>{component}</View>;
};
