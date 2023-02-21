import { transitionDurations, transitionEasingFunctions, transitionProperties } from './animation';
import { borderStyles, borderWidths } from './border';
import { breakpoints } from './breakpoints';
import { colors } from './color';
import { opacity } from './opacity';
import { radii } from './radii';
import { shadows } from './shadows';
import { sizes, space } from './space';
import { fonts, fontSizes, fontWeights, letterSpacings, lineHeights } from './typography';
import { zIndices } from './z-indices';

export const tokens = {
  breakpoints,
  borderStyles,
  borderWidths,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  opacity,
  radii,
  space,
  transitionDurations,
  transitionEasingFunctions,
  transitionProperties,
  sizes,
  shadows,
  zIndices,
};

export type { ColorScheme, ColorSchemeSetting } from './color';
export type Tokens = typeof tokens;
