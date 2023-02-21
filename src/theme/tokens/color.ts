export type ColorScheme = 'dark' | 'light';
export type ColorSchemeSetting = ColorScheme | 'system';

export const base = {
  primary: 'rgba(18, 120, 74, 1)',
  secondary: 'rgba(13, 83, 51, 1)',
  black: 'rgba(0, 0, 0, 1)',
  white: 'rgba(255, 255, 255, 1)',
  'grey-1': 'rgba(153, 153, 153, 1)',
  'grey-2': 'rgba(238, 238, 238, 1)',
  'grey-3': 'rgba(250, 250, 250, 1)',
  transparent: 'transparent',
};

export const typography = {
  'black-typo-high': 'rgba(0, 0, 0, 0.9)',
  'black-typo-medium': 'rgba(0, 0, 0, 0.6)',
  'black-typo-low': 'rgba(0, 0, 0, 0.3)',
  'white-typo-high': 'rgba(255, 255, 255, 0.9)',
  'white-typo-medium': 'rgba(255, 255, 255, 0.6)',
  'white-typo-low': 'rgba(255, 255, 255, 0.3)',
};

export const green = {
  'green-1': 'rgba(11, 96, 58, 1)',
  'green-2': 'rgba(109, 160, 137, 1)',
  'green-3': 'rgba(182, 207, 196, 1)',
};

export const blue = {
  'blue-1': 'rgba(20, 86, 160, 1)',
  'blue-2': 'rgba(114, 153, 198, 1)',
  'blue-3': 'rgba(185, 204, 227, 1)',
};

export const yellow = {
  'yellow-1': 'rgba(105, 78, 9, 1)',
  'yellow-2': 'rgba(165, 149, 108, 1)',
  'yellow-3': 'rgba(210, 202, 181, 1)',
};

export const red = {
  'red-1': 'rgba(183, 28, 28, 1)',
  'red-2': 'rgba(212, 119, 119, 1)',
  'red-3': 'rgba(233, 187, 187, 1)',
};

export const greenAccent = {
  'green-accent-1': 'rgba(8, 164, 94, 1)',
  'green-accent-2': 'rgba(107, 200, 158, 1)',
  'green-accent-3': 'rgba(181, 228, 207, 1)',
};

export const blueAccent = {
  'blue-accent-1': 'rgba(24, 120, 228, 1)',
  'blue-accent-2': 'rgba(116, 174, 239, 1)',
  'blue-accent-3': 'rgba(186, 214, 247, 1)',
};

export const yellowAccent = {
  'yellow-accent-1': 'rgba(237, 171, 3, 1)',
  'yellow-accent-2': 'rgba(244, 204, 104, 1)',
  'yellow-accent-3': 'rgba(250, 230, 179, 1)',
};

export const redAccent = {
  'red-accent-1': 'rgba(244, 67, 54, 1)',
  'red-accent-2': 'rgba(248, 142, 134, 1)',
  'red-accent-3': 'rgba(252, 199, 195, 1)',
};

export const greenSurface = {
  'green-surface-1': 'rgba(227, 249, 227, 1)',
  'green-surface-2': 'rgba(238, 249, 238, 1)',
};

export const blueSurface = {
  'blue-surface-1': 'rgba(214, 241, 255, 1)',
  'blue-surface-2': 'rgba(236, 246, 252, 1)',
};

export const yellowSurface = {
  'yellow-surface-1': 'rgba(255, 242, 208, 1)',
  'yellow-surface-2': 'rgba(247, 244, 239, 1)',
};

export const redSurface = {
  'red-surface-1': 'rgba(255, 226, 224, 1)',
  'red-surface-2': 'rgba(251, 241, 240, 1)',
};

export const colors = {
  ...base,
  ...green,
  ...blue,
  ...yellow,
  ...red,
  ...greenAccent,
  ...blueAccent,
  ...yellowAccent,
  ...redAccent,
  ...greenSurface,
  ...blueSurface,
  ...yellowSurface,
  ...redSurface,
  ...typography,
};

export default colors;
