import { View, Dimensions } from 'react-native';
import { styled, BAR_HEIGHT } from '@theme';
import { Typography } from '@atoms/typography';

const Container = styled(View)`
  width: ${() => Dimensions.get('window').width}px;
  height: ${() => Dimensions.get('window').height - BAR_HEIGHT}px;
  background-color: ${({ theme }) => theme.palette.background.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledTypography = styled(Typography)`
  text-align: center;
`;

type TScreenPlaceholderProps = {
  textContent: string;
};

export const ScreenPlaceholder = ({ textContent }: TScreenPlaceholderProps) => {
  return (
    <Container testID={'ScreenPlaceholder'}>
      <StyledTypography variant="largeTitle">{textContent}</StyledTypography>
    </Container>
  );
};
