import type { TSectionButtonProps } from './section-button';

import { View, FlatList, Dimensions } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { text } from '@storybook/addon-knobs';
import { styled } from '@theme';
import { IconButton } from '@molecules/icon-button';
import { SectionButton } from '.';

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
  height: ${({ theme }) => theme.spacing(2)}px;
`;

const items: TSectionButtonProps[] = [
  {
    leftContent: <IconButton variant="mobile" />,
    textContent: text('Mobile Text', 'Мобильная связь'),
    onPress: () => null,
  },
  {
    leftContent: <IconButton variant="jkh" />,
    textContent: text('JKH Text', 'ЖКХ'),
    onPress: () => null,
  },
  {
    leftContent: <IconButton variant="internet" />,
    textContent: text('Internet Text', 'Интернет'),
    onPress: () => null,
  },
];

storiesOf('ui/molecules', module).add('SectionButton', () => (
  <Container>
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <SectionButton
          leftContent={item.leftContent}
          textContent={item.textContent}
          onPress={item.onPress}
        />
      )}
      keyExtractor={(item) => item.textContent}
      ItemSeparatorComponent={VSpacing}
    />
  </Container>
));
