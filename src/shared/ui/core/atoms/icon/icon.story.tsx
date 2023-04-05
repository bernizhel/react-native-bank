import type { TIconProps } from './icon';

import { View, FlatList, Dimensions } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { styled } from '@theme';
import { Icon } from '.';

const Container = styled(View)`
  padding: ${({ theme }) => theme.spacing(20)}px
    ${({ theme }) => theme.spacing(4)}px;
  width: ${() => Dimensions.get('window').width}px;
  height: ${() => Dimensions.get('window').height}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VSpacing = styled(View)`
  height: 15px;
`;

const items: TIconProps['variant'][] = [
  'wallet',
  'payments',
  'bank',
  'profile',
  'mobile',
  'jkh',
  'internet',
  'arrow-back',
  'shevron-down',
  'crosshair',
];

storiesOf('ui/atoms', module).add('Icon', () => (
  <Container>
    <FlatList
      data={items}
      renderItem={({ item }) => <Icon variant={item} />}
      keyExtractor={(item) => item}
      ItemSeparatorComponent={VSpacing}
    />
  </Container>
));
