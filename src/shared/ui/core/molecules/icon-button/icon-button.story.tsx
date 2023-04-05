import type { TIconButtonProps } from './icon-button';

import { View, FlatList, Dimensions } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { styled } from '@theme';
import { IconButton } from '.';

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
  height: ${({ theme }) => theme.spacing(3)}px;
`;

const items: TIconButtonProps['variant'][] = ['mobile', 'jkh', 'internet'];

storiesOf('ui/molecules', module).add('IconButton', () => (
  <Container>
    <FlatList
      data={items}
      renderItem={({ item }) => <IconButton variant={item} />}
      keyExtractor={(item) => item}
      ItemSeparatorComponent={VSpacing}
    />
  </Container>
));
