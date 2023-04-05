import type { TTabButtonProps } from '@molecules/tab-button';

import { View, FlatList, Dimensions } from 'react-native';
import { styled, BAR_HEIGHT } from '@theme';
import { TabButton } from '@molecules/tab-button';

const Container = styled(View)`
  padding: ${({ theme }) => theme.spacing(1)}px;
  width: ${() => Dimensions.get('window').width}px;
  height: ${() => BAR_HEIGHT}px;
  background-color: ${({ theme }) => theme.palette.background.primary};
  display: flex;
  align-items: center;
`;

export type TTabBarProps = {
  items: TTabButtonProps[];
};

export const TabBar = ({ items }: TTabBarProps) => {
  return (
    <Container testID={'TabBar'}>
      <FlatList
        scrollEnabled={false}
        horizontal={true}
        data={items}
        renderItem={({ item }) => (
          <TabButton
            iconVariant={item.iconVariant}
            textContent={item.textContent}
            isActive={item.isActive}
            onPress={item.onPress}
          />
        )}
        keyExtractor={(item) => item.textContent}
      />
    </Container>
  );
};
