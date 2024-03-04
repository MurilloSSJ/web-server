import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: 16,
    boxSizing: 'border-box',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    display: 'flex',
    backgroundColor: '$dark_100',
    flexDirection: 'column',
    width: '100%',
    color: '$textColor',
    margin: 0,
    padding: 0,
  },
  'h1, h2, h3, h4, h5, h6, button, body': {
    fontFamily: 'Poppins',
  },

  h1: {
    fontSize: '4rem',
    fontWeight: '300',
    lineHeight: '5.93rem',
    letterSpacing: '-0.015em',
    textAlign: 'left',

    '@for-phone-only': {
      fontSize: '3.7rem',
    },
  },

  h2: {
    fontSize: '3rem',
    fontWeight: '300',
    lineHeight: '4.5rem',
    letterSpacing: '0.05em',

    '@for-phone-only': {
      fontSize: '2.5rem',
    },
  },

  h3: {
    fontSize: '2.5rem',
    fontWeight: '300',
    lineHeight: '3.75rem',
    letterSpacing: '0em',
    textAlign: 'left',

    '@for-phone-only': {
      fontSize: '2rem',
    },
  },

  h4: {
    fontSize: '2rem',
    fontWeight: '400',
    lineHeight: '3.12rem',
    letterSpacing: '0.05em',
    textAlign: 'left',
    '@for-phone-only': {
      fontSize: '1.7rem',
    },
  },

  h5: {
    fontSize: '1.25rem',
    fontWeight: '400',
    lineHeight: '2.25rem',
    letterSpacing: '0.1em',
  },

  h6: {
    fontSize: '1.125',
    fontWeight: '400',
    lineHeight: '27px',
    letterSpacing: ' 0.15em',
    textAlign: 'left',
  },

  'input, textarea': {
    lineHeight: '1.5em',
    outline: 0,
    resize: 'none',
  },

  button: {
    cursor: 'pointer',
  },
  '&.ace_editor, &.ace_editor div': {
    fontFamily: 'monospace !important',
    direction: 'ltr',
    textAlign: 'left',
    fontSize: '16px',
  },

  fieldset: {
    border: 0,
    margin: 0,
    minWidth: 0,
    padding: '0.01em 0 0 0',
    marginInlineStart: 0,
    marginInlineEnd: 0,
    paddingBlockStart: 0,
    paddingInlineStart: 0,
    paddingInlineEnd: 0,
    paddingBlockEnd: 0,
    minInlineSize: 'min-content',
  },
  'body:not(:-moz-handler-blocked) fieldset ': {
    display: 'table-cell',
  },
})
