import type { TIconVariants } from '@theme';

import { View, TouchableOpacity, Dimensions } from 'react-native';
import { useTheme } from 'styled-components';
import { styled } from '@theme';
import { Icon } from '@atoms/icon';
import { Typography } from '@atoms/typography';

const Container = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  width: ${({ theme }) =>
    Dimensions.get('window').width / 4 - theme.spacing(1)}px;
`;

const VSpacing = styled(View)`
  height: ${({ theme }) => theme.spacing(0.5)}px;
`;

export type TTabButtonProps = {
  iconVariant: TIconVariants;
  textContent: string;
  isActive: boolean;
  onPress: () => void;
};

export const TabButton = ({
  iconVariant,
  textContent,
  isActive,
  onPress,
}: TTabButtonProps) => {
  const theme = useTheme();
  const tabColor = isActive
    ? theme.palette.accent.secondary
    : theme.palette.text.secondary;
  return (
    <Container onPress={onPress} testID={'TabButton'}>
      <Icon color={tabColor} variant={iconVariant} />
      <VSpacing />
      <Typography style={{ color: tabColor }} variant="caption2">
        {textContent}
      </Typography>
    </Container>
  );
};
