import React, { FC, PropsWithChildren } from "react";
import { SprinklesButton, sprinkleButton } from "./button.css";

export const Button: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <button
        className={sprinkleButton({
          color: "blue",
          backgroundColor: {
            base: "blue-1",
            sm: "green-1",
            lg: "blue-3",
            _hover: "green-3",
          },
          padding: "2",
          margin: {
            _hover: "5px",
            lg: "1px",
            md: "2px",
            base: "3px",
          },
          px: {
            _hover: "3",
          },
          paddingBottom: {
            base: "3",
            sm: "1",
            lg: "5",
            _hover: "2",
          },
        })}
      >
        {children}
      </button>
    </div>
  );
};

type ButtonWithPropsType = SprinklesButton & PropsWithChildren;

export const ButtonWithProps: FC<ButtonWithPropsType> = ({
  children,

  ...props
}) => {
  return (
    <div>
      <button
        className={sprinkleButton({
          color: props.color,
          backgroundColor: props.backgroundColor,
          padding: props.p,
          margin: props.margin,
        })}
      >
        {children}
      </button>
      <button
        className={sprinkleButton({
          ...props,
        })}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
