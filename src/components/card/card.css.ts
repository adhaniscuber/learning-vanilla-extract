import { style, styleVariants } from "@vanilla-extract/css";

// basic style
export const cardStyles = style({
  backgroundColor: "#333",
  color: "white",
  border: "1px solid black",
  borderRadius: "8px",
  padding: "32px",
  margin: "16px",
  boxShadow: "0 0 18px rgba(0, 0, 0, 0.50)",
  display: "flex",

});

// style variants
export const cardVariant = styleVariants({
  small: {
    width: "200px",
  },
  medium: {
    width: "400px",
  },
  full: {
    width: "100%",
  },
});

export type CardSize = keyof typeof cardVariant;

// style variants with dynamic values
const base = style({ color: "gold", fontSize: 24 });

export const accent = styleVariants({
  primary: [cardStyles, { background: "blue" }],
  secondary: [cardStyles, { background: "aqua" }],
});

export type Accent = keyof typeof accent;

// style variants with mapped values
const palette = {
  a: "red",
  b: "aqua",
};

export const variantPalette = styleVariants(palette, (paletteColor) => [
  base,
  { background: paletteColor },
]);

export type VariantPalette = keyof typeof variantPalette;
