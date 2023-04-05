import type { NavigationProp } from '@react-navigation/native';
import type { TTabParamList } from '@shared/config';

import { tabRouteNames } from '@shared/config';
import { TabBar } from '@organisms/tab-bar';

export type TTabBarWidget = {
  navigation: NavigationProp<TTabParamList, keyof TTabParamList>;
};

export const TabBarWidget = ({ navigation }: TTabBarWidget) => {
  const state = navigation.getState();
  const currentRoute = state.routeNames[state.index];
  return (
    <TabBar
      items={[
        {
          iconVariant: 'wallet',
          textContent: tabRouteNames.home.title,
          onPress: () => navigation.navigate(tabRouteNames.home.route),
          isActive: currentRoute === tabRouteNames.home.route,
        },
        {
          iconVariant: 'payments',
          textContent: tabRouteNames.payments.title,
          onPress: () => navigation.navigate(tabRouteNames.payments.route),
          isActive: currentRoute === tabRouteNames.payments.route,
        },
        {
          iconVariant: 'bank',
          textContent: tabRouteNames.atms.title,
          onPress: () => navigation.navigate(tabRouteNames.atms.route),
          isActive: currentRoute === tabRouteNames.atms.route,
        },
        {
          iconVariant: 'profile',
          textContent: tabRouteNames.profile.title,
          onPress: () => navigation.navigate(tabRouteNames.profile.route),
          isActive: currentRoute === tabRouteNames.profile.route,
        },
      ]}
    />
  );
};
