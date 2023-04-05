import { View, TouchableHighlight, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styled, BAR_HEIGHT } from '@theme';
import { Icon } from '@atoms/icon';
import { Typography } from '@atoms/typography';

const Container = styled(View)<{ top: number }>`
  width: ${() => Dimensions.get('window').width}px;
  height: ${() => BAR_HEIGHT}px;
  background-color: ${({ theme }) => theme.palette.background.primary};
  padding: ${({ theme }) => theme.spacing(1)}px
    ${({ theme }) => theme.spacing(2)}px;
  margin-bottom: ${({ top }) => top}px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const StyledTypography = styled(Typography)<{ iconSize: number }>`
  flex-basis: ${({ theme, iconSize }) =>
    Dimensions.get('window').width - 2 * theme.spacing(2) - 2 * iconSize}px;
  text-align: center;
`;

export type TStackHeaderProps = {
  textContent: string;
  onPress: () => void;
  iconSize?: number;
};

export const StackHeader = ({
  textContent,
  onPress,
  iconSize = 24,
}: TStackHeaderProps) => {
  const { top } = useSafeAreaInsets();
  return (
    <Container top={top} testID={'StackHeader'}>
      <TouchableHighlight onPress={onPress}>
        <Icon variant="arrow-back" size={iconSize} />
      </TouchableHighlight>
      <StyledTypography variant="subtitle" iconSize={iconSize}>
        {textContent}
      </StyledTypography>
    </Container>
  );
};
