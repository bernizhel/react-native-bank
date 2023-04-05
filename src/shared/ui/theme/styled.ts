import webStyled from 'styled-components';
import nativeStyled from 'styled-components/native';
import { isPlatformNative } from '@shared/lib/platform';

const styled = isPlatformNative ? nativeStyled : webStyled;

export { styled };
