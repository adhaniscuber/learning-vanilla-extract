import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { sprinkleDropdown } from "./sprinkleDropdown.css";

export const dropdownRecipe = recipe({
  base: [
    sprinkleDropdown({
      color: 'red',
      backgroundColor: 'green-2',
    })
  ],
  variants: {
    type: {
      'drop1': [
        sprinkleDropdown({
          padding: '3',
          paddingTop: {
            _hover: '1',
          },
        }),
        {
          paddingBottom: '4',
        }
      ]
    },
  },

  defaultVariants: {
    type: 'drop1',
  }
});

export type DropdownVariantProps = RecipeVariants<typeof dropdownRecipe>;
