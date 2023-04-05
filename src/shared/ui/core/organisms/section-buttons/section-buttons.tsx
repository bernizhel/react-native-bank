import type { TSectionButtonProps } from '@molecules/section-button';

import { View, FlatList, Dimensions } from 'react-native';
import { useTheme } from 'styled-components';
import { styled } from '@theme';
import { SectionButton } from '@molecules/section-button';

const DividerLine = styled(View)`
  margin: ${({ theme }) => theme.spacing(2)}px 0;
  height: 1px;
  width: ${({ theme }) => Dimensions.get('window').width - theme.spacing(11)}px;
  background-color: ${({ theme }) => theme.palette.content.secondary};
`;

const DividerContainer = styled(View)`
  display: flex;
  align-items: flex-end;
`;

const Divider = () => {
  return (
    <DividerContainer testID="SectionButtons.Divider">
      <DividerLine />
    </DividerContainer>
  );
};

const Container = styled(View)`
  background-color: ${({ theme }) => theme.palette.background.secondary};
  width: ${() => Dimensions.get('window').width}px;
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(4)}px 0;
`;

export type TSectionButtonsProps = {
  items: TSectionButtonProps[];
};

export const SectionButtons = ({ items }: TSectionButtonsProps) => {
  const theme = useTheme();
  return (
    <Container testID={'SectionButtons'}>
      <FlatList
        style={{
          width: Dimensions.get('window').width - theme.spacing(4),
        }}
        data={items}
        renderItem={({ item }) => (
          <SectionButton
            leftContent={item.leftContent}
            textContent={item.textContent}
            onPress={item.onPress}
          />
        )}
        keyExtractor={(item) => item.textContent}
        ItemSeparatorComponent={Divider}
      />
    </Container>
  );
};
