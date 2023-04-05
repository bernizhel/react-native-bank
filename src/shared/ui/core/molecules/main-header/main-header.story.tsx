import type { TMainHeaderProps } from './main-header';

import { View, FlatList, Dimensions } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { text } from '@storybook/addon-knobs';
import { styled } from '@theme';
import { MainHeader } from '.';

const Container = styled(View)`
  width: ${() => Dimensions.get('window').width}px;
  height: ${() => Dimensions.get('window').height}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VSpacing = styled(View)`
  height: ${({ theme }) => theme.spacing(2)}px;
`;

const items: TMainHeaderProps['textContent'][] = [
  text('Home Header', 'Главная'),
  text('Payments Header', 'Платежи'),
  text('ATMs Header', 'Банкоматы'),
  text('Profile Header', 'Профиль'),
];

storiesOf('ui/molecules', module).add('MainHeader', () => (
  <Container>
    <FlatList
      data={items}
      renderItem={({ item }) => <MainHeader textContent={item} />}
      keyExtractor={(item) => item}
      ItemSeparatorComponent={VSpacing}
    />
  </Container>
));
