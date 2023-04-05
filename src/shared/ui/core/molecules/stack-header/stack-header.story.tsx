import type { TStackHeaderProps } from './stack-header';

import { View, FlatList, Dimensions } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { styled } from '@theme';
import { StackHeader } from '.';

const Container = styled(View)`
  padding: ${({ theme }) => theme.spacing(20)}px 0;
  width: ${() => Dimensions.get('window').width}px;
  height: ${() => Dimensions.get('window').height}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VSpacing = styled(View)`
  height: ${({ theme }) => theme.spacing(2)}px;
`;

const items: TStackHeaderProps[] = [
  { textContent: 'Мобильная связь', onPress: () => null },
  { textContent: 'ЖКХ', onPress: () => null },
  { textContent: 'Интернет', onPress: () => null },
  {
    textContent: 'Очень длинный текст, не помещающийся в компонент',
    onPress: () => null,
  },
];

storiesOf('ui/molecules', module).add('StackHeader', () => (
  <Container>
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <StackHeader textContent={item.textContent} onPress={item.onPress} />
      )}
      keyExtractor={(item) => item.textContent}
      ItemSeparatorComponent={VSpacing}
    />
  </Container>
));
