import type { StyleProp, TextStyle } from 'react-native';
import type { TTypographyVariants } from '@theme';

import { Text } from 'react-native';
import { styled } from '@theme';

const TextVariant = styled(Text)<{ $variant: TTypographyVariants }>`
  font-family: ${({ theme, $variant }) =>
    theme.typography[$variant].fontFamily};
  font-size: ${({ theme, $variant }) => theme.typography[$variant].size};
  letter-spacing: ${({ theme, $variant }) =>
    theme.typography[$variant].letterSpacing};
  line-height: ${({ theme, $variant }) =>
    theme.typography[$variant].lineHeight};
  color: ${({ theme }) => theme.palette.text.primary};
`;

type TTypographyProps = {
  children: string;
  variant?: TTypographyVariants;
  style?: StyleProp<TextStyle>;
};

// style prop will get data from styled-components
export const Typography = ({
  variant = 'body20',
  style,
  children,
}: TTypographyProps) => {
  return (
    <TextVariant $variant={variant} style={style} testID={'Typography'}>
      {children}
    </TextVariant>
  );
};
