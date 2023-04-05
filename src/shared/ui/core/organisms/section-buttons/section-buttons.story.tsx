import type { TSectionButtonsProps } from './section-buttons';

import { View, Dimensions } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { styled } from '@theme';
import { IconButton } from '@molecules/icon-button';
import { SectionButtons } from '.';

const Container = styled(View)`
  padding: ${({ theme }) => theme.spacing(20)}px
    ${({ theme }) => theme.spacing(4)}px;
  width: ${() => Dimensions.get('window').width}px;
  height: ${() => Dimensions.get('window').height}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const data: TSectionButtonsProps = {
  items: [
    {
      leftContent: <IconButton variant="mobile" />,
      textContent: 'Мобильная связь',
      onPress: () => null,
    },
    {
      leftContent: <IconButton variant="jkh" />,
      textContent: 'ЖКХ',
      onPress: () => null,
    },
    {
      leftContent: <IconButton variant="internet" />,
      textContent: 'Интернет',
      onPress: () => null,
    },
  ],
};

storiesOf('ui/organisms', module).add('SectionButtons', () => (
  <Container>
    <SectionButtons items={data.items} />
  </Container>
));
