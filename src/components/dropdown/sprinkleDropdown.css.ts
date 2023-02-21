import { theme } from '@/theme/theme.css';
import {
  defineProperties,
  createSprinkles
} from '@vanilla-extract/sprinkles';

const dropdownSprinkle = defineProperties({
  defaultCondition: 'base',
  conditions: {
    base: { '@media': 'screen and (min-width: 0px)' },
    sm: { '@media': 'screen and (min-width: 200px)' },
    md: { '@media': 'screen and (min-width: 400px)' },
    lg: { '@media': 'screen and (min-width: 600px)' },
    '_hover': { selector: '&:hover' },
  },
  properties: {
    color: ['red', 'blue', 'green'],
    backgroundColor: theme.color,
    padding: theme.space,
    paddingTop: theme.space,
    paddingRight: theme.space,
    paddingBottom: theme.space,
    paddingLeft: theme.space,
    margin: ['1px', '2px', '3px', '4px', '5px'],
  },
  shorthands: {
    p: ['padding'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
  }
})

export const sprinkleDropdown = createSprinkles(dropdownSprinkle);
export type SprinklesDropdown = Parameters<typeof sprinkleDropdown>[0];
