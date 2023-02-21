import { theme } from '@/theme/theme.css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

export const alertRecipeVariant = recipe({
  base: {
    borderRadius: 6,


  },
  variants: {
    color: {
      neutral: { background: 'whitesmoke', color: 'red' },
      brand: { background: 'blueviolet' },
      accent: { background: 'slateblue' }
    },
    size: {
      small: { padding: theme.space[3] },
      medium: { padding: 16 },
      large: { padding: 24 }
    },
    rounded: {
      true: { borderRadius: 999 }
    }
  },

  defaultVariants: {
    color: 'accent',
    size: 'medium'
  }
});

export type AlertVariantProps = RecipeVariants<typeof alertRecipeVariant>;



export const alertRecipeCompound = recipe({
  base: {
    borderRadius: 6,
    ':hover': {
      background: 'pink'
    }
  },
  variants: {
    color: {
      neutral: {
        background: 'whitesmoke',
      },
      brand: { background: 'blueviolet' },
      accent: { background: 'slateblue',  }
    },
    size: {
      small: { padding: 12 },
      medium: { padding: 16 },
      large: { padding: 24 }
    },
    rounded: {
      true: { borderRadius: 999 }
    }
  },
  compoundVariants: [
    {
      variants: {
        color: 'neutral',
        size: 'small'
      },
      style: {
        background: 'red',
        ':hover': {
          background: 'green'
        },
      }
    }
  ],

  defaultVariants: {
    color: 'accent',
    size: 'medium'
  }
});

