import { calc } from '@vanilla-extract/css-utils';

type Column = {
  [columnSize: string]: string;
};

const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const columnSizes = columns.reduce<Column>((accumulator, column) => {
  const key = `${column}/12`;
  accumulator[key] = calc(column / 12)
    .multiply('100%')
    .toString();
  return { ...accumulator };
}, {});

export const space = {
  '0': '0',
  '1': '1px',
  '2': '2px',
  '4': '4px',
  '6': '6px',
  '8': '8px',
  '10': '10px',
  '12': '12px',
  '14': '14px',
  '16': '16px',
  '18': '18px',
  '20': '20px',
  '24': '24px',
  '32': '32px',
  '40': '40px',
  '48': '48px',
  '56': '56px',
  '64': '64px',
  '72': '72px',
  '80': '80px',
  '88': '88px',
  '96': '96px',
  '104': '104px',
  '112': '112px',
  auto: 'auto',
  full: '100%',
  fitContent: 'fit-content',
  maxContent: 'max-content',
  minContent: 'min-content',
  '100vh': '100vh',
  '100vw': '100vw',
  gapX: '32px',
  gapY: '32px',
};

export const sizes = {
  ...space,
  ...columnSizes,
};
