import type { TTabButtonProps } from './tab-button';

import { View, FlatList } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { styled } from '@theme';
import { TabButton } from '.';

const Container = styled(View)`
  padding: ${({ theme }) => theme.spacing(20)}px
    ${({ theme }) => theme.spacing(4)}px;
  display: flex;
  flex-direction: row;
`;

const HSpacing = styled(View)`
  width: ${({ theme }) => theme.spacing(4)}px;
`;

const items: TTabButtonProps[] = [
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
];

storiesOf('ui/molecules', module).add('TabButton', () => (
  <Container>
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <TabButton
          iconVariant={item.iconVariant}
          textContent={item.textContent}
          isActive={item.isActive}
          onPress={item.onPress}
        />
      )}
      keyExtractor={(item) => item.textContent}
      ItemSeparatorComponent={HSpacing}
    />
  </Container>
));
