import { useEffect } from 'react';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useStore } from 'effector-react';
import { stackRouteNames } from '@shared/config';
import { BAR_HEIGHT } from '@theme';
import { Typography } from '@atoms/typography';
import { IconButton } from '@molecules/icon-button';
import { $categoriesLoading, getCategoriesFx } from '@entities/category';
import { ScreenWrapper } from '@pages/ui/screen-wrapper';
import { Payments } from '../views';

export const PaymentsConnector = () => {
  const navigation = useNavigation();
  const categoriesLoading = useStore($categoriesLoading);
  useEffect(() => {
    getCategoriesFx();
  }, []);
  return (
    <ScreenWrapper
      component={
        !categoriesLoading ? (
          <Payments
            mainHeaderProps={{ textContent: 'Платежи' }}
            sectionButtonsProps={{
              items: [
                {
                  leftContent: <IconButton variant="mobile" />,
                  textContent: stackRouteNames.mobile.title,
                  onPress: () =>
                    navigation
                      ?.getParent()
                      ?.navigate(stackRouteNames.mobile.route),
                },
                {
                  leftContent: <IconButton variant="jkh" />,
                  textContent: stackRouteNames.jkh.title,
                  onPress: () =>
                    navigation
                      ?.getParent()
                      ?.navigate(stackRouteNames.jkh.route),
                },
                {
                  leftContent: <IconButton variant="internet" />,
                  textContent: stackRouteNames.internet.title,
                  onPress: () =>
                    navigation
                      ?.getParent()
                      ?.navigate(stackRouteNames.internet.route),
                },
              ],
            }}
          />
        ) : (
          <Typography
            style={{
              textAlign: 'center',
              textAlignVertical: 'center',
              height: Dimensions.get('window').height - BAR_HEIGHT,
              width: Dimensions.get('window').width,
              backgroundColor: '#333',
            }}>
            LOADING...
          </Typography>
        )
      }
    />
  );
};
