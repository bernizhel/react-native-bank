import type { ReactNode } from 'react';

import { View, TouchableOpacity } from 'react-native';
import { styled } from '@theme';
import { Typography } from '@atoms/typography';

const Container = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HSpacing = styled(View)`
  width: ${({ theme }) => theme.spacing(2)}px;
`;

export type TSectionButtonProps = {
  leftContent: ReactNode;
  textContent: string;
  onPress: () => void;
};

export const SectionButton = ({
  leftContent,
  textContent,
  onPress,
}: TSectionButtonProps) => {
  return (
    <Container onPress={onPress} testID={'SectionButton'}>
      {leftContent}
      <HSpacing />
      <Typography variant="body15Regular">{textContent}</Typography>
    </Container>
  );
};
