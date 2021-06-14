export default {
  list: {
    paddingY: 'default',
    flexWrap: 'wrap',
  },
  item: {
    flexWrap: 'wrap',
    alignItems: 'center',
    '&:first-child': {
      mr: '0.5rem',
    },
    svg: {
      fontSize: '0.75rem',
      mx: '0.5rem',
    },
    '&:last-child': {
      svg: {
        display: 'none',
      },
    },
  },
  label: {
    variant: 'text.typo4',
    fontWeight: 'bold',
  },
};
