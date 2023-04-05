import { Platform } from 'react-native';

export const platformType = (): 'native' | 'web' => {
  return ['android', 'ios'].includes(Platform.OS) ? 'native' : 'web';
};

export const isPlatformNative = platformType() === 'native';
