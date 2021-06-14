import { ThemeUICSSObject } from 'theme-ui';

export default {
  mt: '-0.25rem',
  ml: '-0.75rem',
  flexWrap: 'wrap',
  item: {
    position: 'relative' as ThemeUICSSObject['position'],
    mt: '0.25rem',
    'a, button': {
      fontFamily: 'secondary',
      color: 'treePoppy',
      paddingX: '0.75rem',
    },
    '&:not(:last-child)::after': {
      borderLeft: '1px solid',
      borderColor: 'dustyGray',
      display: 'block',
      content: '""',
      position: 'absolute' as ThemeUICSSObject['position'],
      top: '0.125rem',
      bottom: '0.125rem',
      right: 0,
    },
  },
};
