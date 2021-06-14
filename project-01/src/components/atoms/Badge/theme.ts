import { ThemeUICSSObject } from 'theme-ui';

export default {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    borderRadius: '50%',
    textAlign: 'center' as ThemeUICSSObject['textAlign'],
    width: '8.75rem',
    height: '8.75rem',
    p: '0.5rem',
    svg: {
      fontSize: '4.5rem',
    },
  },
  image: {
    img: {
      height: '4.5rem',
    },
  },
  primary: {
    backgroundColor: 'alabaster',
    color: 'treePoppy',
    variant: 'badges.base',
  },
  secondary: {
    backgroundColor: 'treePoppy',
    color: 'white',
    variant: 'badges.base',
  },
};
