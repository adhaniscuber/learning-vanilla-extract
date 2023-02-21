export const breakpoints = {
  xs: '0',
  sm: '600px',
  md: '900px',
  lg: '1200px',
  xl: '1536px',
};

export type Breakpoint = keyof typeof breakpoints;

export const breakpointNames = Object.keys(breakpoints) as Breakpoint[];
