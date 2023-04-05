import { tabRouteNames } from '@shared/config';
import { ScreenWrapper } from '@pages/ui/screen-wrapper';
import { ScreenPlaceholder } from '../../views';

export const ScreenPlaceholderConnectorProfile = () => {
  return (
    <ScreenWrapper
      component={
        <ScreenPlaceholder textContent={tabRouteNames.profile.title} />
      }
    />
  );
};
