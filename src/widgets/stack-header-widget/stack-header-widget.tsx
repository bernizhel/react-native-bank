import type { NavigationProp, RouteProp } from '@react-navigation/native';
import type { TStackParamList } from '@shared/config';

import { stackRouteNames } from '@shared/config';
import { StackHeader } from '@molecules/stack-header';

export type TStackHeaderWidget = {
  navigation: NavigationProp<TStackParamList, keyof TStackParamList>;
  route: RouteProp<TStackParamList, keyof TStackParamList>;
};

export const StackHeaderWidget = ({
  navigation,
  route,
}: TStackHeaderWidget) => {
  return (
    <StackHeader
      onPress={() => navigation.goBack()}
      textContent={stackRouteNames[route.name].title}
    />
  );
};
