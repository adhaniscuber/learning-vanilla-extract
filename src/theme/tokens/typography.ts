const system =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";
const fonts = {
  playfair: `'Playfair Display', ${system}`,
  poppins: `'Poppins', ${system}`,
} as const;

const fontSizes = {
  'heading-1': '48px',
  'heading-2': '40px',
  'heading-3': '32px',
  'heading-4': '24px',
  'heading-5': '20px',
  'heading-6': '16px',
  'subtitle-1': '20px',
  'subtitle-2': '18px',
  'body-1': '16px',
  'body-2': '14px',
  caption: '12px',
  footer: '10px',
} as const;

const lineHeights = {
  normal: 'normal',
  none: '1',
  '16': '16px',
  '20': '20px',
  '24': '24px',
  '28': '28px',
  '32': '32px',
  '40': '40px',
  '48': '48px',
  '56': '56px',
} as const;

const letterSpacings = {
  tighter: '-0.2px',
  tight: '-0.05px',
  normal: '0px',
  wide: '0.2px',
  wider: '0.5px',
} as const;

const fontWeights = {
  hairline: '100',
  thin: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
} as const;

const textStyles = {
  heading: {
    1: {
      fontSize: fontSizes['heading-1'],
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights['56'],
      letterSpacing: letterSpacings.normal,
    },
    2: {
      fontSize: fontSizes['heading-2'],
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights['48'],
      letterSpacing: letterSpacings.normal,
    },
    3: {
      fontSize: fontSizes['heading-3'],
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights['40'],
      letterSpacing: letterSpacings.normal,
    },
    4: {
      fontSize: fontSizes['heading-4'],
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights['32'],
      letterSpacing: letterSpacings.normal,
    },
    5: {
      fontSize: fontSizes['heading-5'],
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights['28'],
      letterSpacing: letterSpacings.normal,
    },
    6: {
      fontSize: fontSizes['heading-6'],
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights['24'],
      letterSpacing: letterSpacings.normal,
    },
  },
  subtitle: {
    1: {
      fontSize: fontSizes['subtitle-1'],
      lineHeight: lineHeights['32'],
      letterSpacing: letterSpacings.normal,
    },
    2: {
      fontSize: fontSizes['subtitle-2'],
      lineHeight: lineHeights['24'],
      letterSpacing: letterSpacings.normal,
    },
  },
  body: {
    1: {
      fontSize: fontSizes['body-1'],
      lineHeight: lineHeights['24'],
      letterSpacing: letterSpacings.normal,
    },
    2: {
      fontSize: fontSizes['body-2'],
      lineHeight: lineHeights['20'],
      letterSpacing: letterSpacings.normal,
    },
  },
  caption: {
    fontSize: fontSizes.caption,
    lineHeight: lineHeights['16'],
    letterSpacing: letterSpacings.normal,
  },
  footer: {
    fontSize: fontSizes.footer,
    lineHeight: lineHeights['16'],
    letterSpacing: letterSpacings.wider,
  },
} as const;

export { fonts, fontSizes, fontWeights, letterSpacings, lineHeights, textStyles };
