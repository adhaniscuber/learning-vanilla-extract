import React, { FC } from "react";
import {
  AlertVariantProps,
  alertRecipeCompound,
  alertRecipeVariant,
} from "./alert.css";

type AlertProps = AlertVariantProps;

const Alert: FC<AlertProps> = ({ ...props }) => {
  return (
    <div>
      {/* example 1 */}
      <div
        className={alertRecipeVariant({
          color: "accent",
          rounded: true,
          size: "large",
        })}
      >
        Alert 1
      </div>

      {/* example 2 */}
      <br />
      <div
        className={alertRecipeCompound({
          color: "neutral",
          size: "medium",
        })}
      >
        Alert 2
      </div>
      <div
        className={alertRecipeCompound({
          color: "neutral",
          size: "small",
        })}
      >
        Alert 2 compound
      </div>

      {/* Example 3  */}
      {/* <div
        className={alertRecipeCompound({
          color: "neutral",
          size: "small",
        })}
      >
        Alert 2 bg red
      </div> */}

      {/* Example 4 */}
      {/* <br />
      <div
        className={alertRecipeVariant({
          ...props,
        })}
      >
        Alert Props
      </div> */}
    </div>
  );
};

export default Alert;
