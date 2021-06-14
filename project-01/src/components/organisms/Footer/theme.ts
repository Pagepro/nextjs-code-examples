import { ThemeUICSSObject } from 'theme-ui';

export default {
  pt: '1.875rem',
  borderTop: '1px solid',
  borderColor: 'mercury',
  color: 'dustyGray',
  main: {
    gridTemplateColumns: ['1fr', 'repeat(2, 1fr)', 'repeat(4, 1fr)'],
    gridColumnGap: '2rem',
    gridRowGap: '2.5rem',
    pb: '2rem',
  },
  copy: {
    borderTop: '1px solid',
    borderColor: 'mercury',
    py: '1.25rem',
    textAlign: 'center' as ThemeUICSSObject['textAlign'],
  },
  title: {
    textTransform: 'uppercase' as ThemeUICSSObject['textTransform'],
    mb: '1.25rem',
    variant: 'text.typo4',
  },
  cms: {
    fontFamily: 'secondary',
    variant: 'text.text',
    'p > strong': {
      mt: '0.75rem',
      fontWeight: 'bold',
    },
    a: {
      maxWidth: ['14.625rem', '10.125rem'],
      display: 'block',
      mb: '0.5rem',
    },
    p: {
      variant: 'text.text',
      a: {
        maxWidth: 'initial',
        display: 'inline-block',
        mb: 0,
        '&:hover': {
          color: 'text',
          textDecoration: 'underline',
        },
      },
    },
    'p:empty': {
      mb: '1rem',
    },
  },
  disclaimer: {
    justifyContent: 'center',
    variant: 'text.typo10',
    mt: '0.625rem',
  },
  bottom: {
    py: '1.25rem',
    backgroundColor: 'springWood',
  },
};
