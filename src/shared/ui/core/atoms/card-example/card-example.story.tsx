import { View, Dimensions } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { styled } from '@theme';
import { CardExample } from '.';

const Container = styled(View)`
  width: ${() => Dimensions.get('window').width}px;
  height: ${() => Dimensions.get('window').height}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

storiesOf('ui/atoms', module).add('CardExample', () => (
  <Container>
    <CardExample />
  </Container>
));
