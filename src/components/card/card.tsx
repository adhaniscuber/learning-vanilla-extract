import React from "react";
import {
  CardSize,
  accent,
  // accent,
  cardStyles,
  cardVariant,
  variantPalette,
  // cardVariant,
  // variantPalette,
} from "./card.css";
import clsx from "clsx";

const Card = ({ size = "full" }: { size: CardSize }) => {
  return (
    <>
      <div className={cardStyles}>Card</div>

      {/* example 2 */}
      <div className={clsx(cardStyles, cardVariant[size])}>Card 2</div>

      {/* example 3 */}
      <div className={clsx(accent["secondary"])}>Card 3</div>

      {/* example 4 */}
      <div
        className={clsx(cardStyles, cardVariant["small"], variantPalette["b"])}
      >
        Card 4
      </div>
    </>
  );
};

export default Card;
