import React from 'react';
import { View } from 'react-native';
import {
  getStorybookUI,
  configure,
  addDecorator,
} from '@storybook/react-native';
import {} from '@storybook/addon-controls';
import { registerRootComponent } from 'expo';

import { loadStories } from './storyLoader';
import App from '../App';

// enables knobs for all stories
addDecorator();

// import stories
configure(() => {
  loadStories();
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const Storybook = getStorybookUI({ asyncStorage: null });

addDecorator((story) => (
  <View
    style={{
      flex: 1,
      backgroundColor: '#352F3D',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    {story()}
  </View>
));

export default registerRootComponent(() => <App storybookUI={<Storybook />} />);
