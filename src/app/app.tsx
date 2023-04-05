import type { ReactNode } from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { AppThemeProvider } from '@theme';
import { AppNavigation } from '@pages/app-navigation';

const customFonts = {
  SF_PRO_BOLD_700: require('@assets/fonts/SFProDisplay-Bold.ttf'),
  SF_PRO_SEMIBOLD_600: require('@assets/fonts/SFProDisplay-Semibold.ttf'),
  SF_PRO_MEDIUM_500: require('@assets/fonts/SFProDisplay-Medium.ttf'),
  SF_PRO_REGULAR_400: require('@assets/fonts/SFProDisplay-Regular.ttf'),
};

type TAppProps = {
  storybook?: ReactNode;
};

export const App = ({ storybook }: TAppProps) => {
  const [isFontsLoaded] = useFonts(customFonts);

  if (!isFontsLoaded) {
    return <AppLoading />;
  }

  if (storybook !== undefined) {
    return (
      <SafeAreaProvider>
        <AppThemeProvider>{storybook}</AppThemeProvider>
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <AppThemeProvider>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </AppThemeProvider>
    </SafeAreaProvider>
  );
};
