import type { TIconVariants } from '@theme';

import { View } from 'react-native';
import { useTheme } from 'styled-components';
import { styled } from '@theme';
import { Icon } from '@atoms/icon';

const Container = styled(View)<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ size }) => size / 2}px;
  background-color: ${({ theme }) => theme.palette.content.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export type TIconButtonProps = {
  variant: TIconVariants;
  size?: number;
};

export const IconButton = ({ variant, size = 40 }: TIconButtonProps) => {
  const theme = useTheme();
  return (
    <Container size={size} testID={'IconButton'}>
      <Icon variant={variant} color={theme.palette.button.primary} />
    </Container>
  );
};
