import { ReactNode } from "react";
import classes from "./Card.module.css";

interface ICard {
  children: ReactNode;
  className: string;
}

export const Card = (props: ICard) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};
