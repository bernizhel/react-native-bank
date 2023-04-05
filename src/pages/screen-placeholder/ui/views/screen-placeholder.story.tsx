import { storiesOf } from '@storybook/react-native';
import { ScreenPlaceholder } from '.';

storiesOf('ui/pages', module).add('ScreenPlaceholder', () => (
  <ScreenPlaceholder textContent="This is the ScreenPlaceholder page" />
));
