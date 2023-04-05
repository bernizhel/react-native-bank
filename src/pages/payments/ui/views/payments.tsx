import type { ComponentProps } from 'react';

import { View, Dimensions } from 'react-native';
import { styled } from '@theme';
import { MainHeader } from '@molecules/main-header';
import { SectionButtons } from '@organisms/section-buttons';

const Container = styled(View)`
  width: ${() => Dimensions.get('window').width}px;
  height: ${() => Dimensions.get('window').height}px;
`;

export type TPaymentsProps = {
  mainHeaderProps: ComponentProps<typeof MainHeader>;
  sectionButtonsProps: ComponentProps<typeof SectionButtons>;
};

export const Payments = ({
  mainHeaderProps,
  sectionButtonsProps,
}: TPaymentsProps) => {
  return (
    <Container testID={'Payments'}>
      <MainHeader {...mainHeaderProps} />
      <SectionButtons {...sectionButtonsProps} />
    </Container>
  );
};
