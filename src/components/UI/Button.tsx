import { ReactNode } from "react";
import classes from "./Button.module.css";

interface IButton {
  type?: "button" | "submit" | "reset";
  onClick: (event: any) => void;
  children: ReactNode;
}

export const Button = (props: IButton) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
