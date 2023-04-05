import { storiesOf } from '@storybook/react-native';
import { IconButton } from '@molecules/icon-button';
import { Payments } from '.';

storiesOf('ui/pages', module).add('Payments', () => (
  <Payments
    mainHeaderProps={{ textContent: 'Test' }}
    sectionButtonsProps={{
      items: [
        {
          leftContent: <IconButton variant={'mobile'} />,
          textContent: 'Мобильная связь',
          onPress: () => null,
        },
      ],
    }}
  />
));
