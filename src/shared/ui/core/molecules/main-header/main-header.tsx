import { View, Dimensions } from 'react-native';
import { styled } from '@theme';
import { Typography } from '@atoms/typography';

const Container = styled(View)`
  background-color: ${({ theme }) => theme.palette.background.primary};
  width: ${() => Dimensions.get('window').width}px;
  height: ${() => Dimensions.get('window').height * 0.15}px;
  padding: ${({ theme }) => theme.spacing(1)}px
    ${({ theme }) => theme.spacing(2)}px;
  display: flex;
  justify-content: flex-end;
`;

export type TMainHeaderProps = {
  textContent: string;
};

export const MainHeader = ({ textContent }: TMainHeaderProps) => {
  return (
    <Container testID={'MainHeader'}>
      <Typography variant="title">{textContent}</Typography>
    </Container>
  );
};
