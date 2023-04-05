import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { styled } from '@theme';
import { Typography } from '.';

const TypographyWithPadding = styled(Typography)`
  padding: ${({ theme }) => theme.spacing(1.5)}px
    ${({ theme }) => theme.spacing(2)}px;
`;

storiesOf('ui/atoms', module).add('Typography', () => (
  <View>
    <TypographyWithPadding variant="title">Title 34 bold</TypographyWithPadding>
    <TypographyWithPadding variant="largeTitle">
      Large title 28 medium
    </TypographyWithPadding>
    <TypographyWithPadding variant="subtitle">
      Subtitle 20 semibold
    </TypographyWithPadding>
    <TypographyWithPadding variant="body20">
      Body 20 regular
    </TypographyWithPadding>
    <TypographyWithPadding variant="body17Medium">
      Body 17 medium
    </TypographyWithPadding>
    <TypographyWithPadding variant="body17Regular">
      Body 1 17 regular
    </TypographyWithPadding>
    <TypographyWithPadding variant="body15Regular">
      Body 2 15 regular
    </TypographyWithPadding>
    <TypographyWithPadding variant="body15Semibold">
      Body 15 semibold
    </TypographyWithPadding>
    <TypographyWithPadding variant="caption1">
      Caption 1 13
    </TypographyWithPadding>
    <TypographyWithPadding variant="caption2">
      Caption 2 11
    </TypographyWithPadding>
    <TypographyWithPadding variant="button">Button</TypographyWithPadding>
  </View>
));
