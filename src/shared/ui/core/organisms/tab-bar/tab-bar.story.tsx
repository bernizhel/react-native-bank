import type { TTabBarProps } from './tab-bar';

import { View, Dimensions } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { styled } from '@theme';
import { TabBar } from '.';

const Container = styled(View)`
  width: ${() => Dimensions.get('window').width}px;
  height: ${() => Dimensions.get('window').height}px;
  display: flex;
  justify-content: center;
`;

const data: TTabBarProps = {
  items: [
    {
      iconVariant: 'wallet',
      textContent: 'Главная',
      isActive: false,
      onPress: () => null,
    },
    {
      iconVariant: 'payments',
      textContent: 'Платежи',
      isActive: true,
      onPress: () => null,
    },
    {
      iconVariant: 'bank',
      textContent: 'Банкоматы',
      isActive: false,
      onPress: () => null,
    },
    {
      iconVariant: 'profile',
      textContent: 'Профиль',
      isActive: false,
      onPress: () => null,
    },
  ],
};

storiesOf('ui/organisms', module).add('TabBar', () => (
  <Container>
    <TabBar items={data.items} />
  </Container>
));
