import { stackRouteNames } from '@shared/config';
import { ScreenWrapper } from '@pages/ui/screen-wrapper';
import { ScreenPlaceholder } from '../../views';

export const ScreenPlaceholderConnectorMobile = () => {
  return (
    <ScreenWrapper
      headerShown={true}
      component={
        <ScreenPlaceholder textContent={stackRouteNames.mobile.title} />
      }
    />
  );
};
