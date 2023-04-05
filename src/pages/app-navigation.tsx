import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { stackRouteNames, tabRouteNames } from '@shared/config';
import { StackHeaderWidget } from '@widgets/stack-header-widget';
import { TabBarWidget } from '@widgets/tab-bar-widget';
import {
  ScreenPlaceholderConnectorHome,
  ScreenPlaceholderConnectorAtms,
  ScreenPlaceholderConnectorProfile,
  ScreenPlaceholderConnectorMobile,
  ScreenPlaceholderConnectorJkh,
  ScreenPlaceholderConnectorInternet,
} from '@pages/screen-placeholder';
import { PaymentsConnector } from '@pages/payments';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={tabRouteNames.home.route}
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation }) => (
        <TabBarWidget navigation={navigation as never} />
      )}>
      <Tab.Screen
        name={tabRouteNames.home.route}
        component={ScreenPlaceholderConnectorHome}
      />
      <Tab.Screen
        name={tabRouteNames.payments.route}
        component={PaymentsConnector}
      />
      <Tab.Screen
        name={tabRouteNames.atms.route}
        component={ScreenPlaceholderConnectorAtms}
      />
      <Tab.Screen
        name={tabRouteNames.profile.route}
        component={ScreenPlaceholderConnectorProfile}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={stackRouteNames.menu.route}
      screenOptions={{
        header: ({ navigation, route }) => (
          <StackHeaderWidget
            navigation={navigation as never}
            route={route as never}
          />
        ),
      }}>
      <Stack.Screen
        name={stackRouteNames.menu.route}
        options={{ headerShown: false }}
        component={TabNavigation}
      />
      <Stack.Screen
        name={stackRouteNames.mobile.route}
        component={ScreenPlaceholderConnectorMobile}
      />
      <Stack.Screen
        name={stackRouteNames.jkh.route}
        component={ScreenPlaceholderConnectorJkh}
      />
      <Stack.Screen
        name={stackRouteNames.internet.route}
        component={ScreenPlaceholderConnectorInternet}
      />
    </Stack.Navigator>
  );
};
