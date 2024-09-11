import s from "./Button.module.scss";
import clsx from "clsx";

export const Button = ({ icon, color, children, onclick }) => {
  return (
    <>
      <button
        className={
          icon
            ? ""
            : clsx(s.button, {
                [s.button_black]: color === "black",
                [s.button_red]: color === "red",
                [s.button_grey]: color === "grey",
              })
        }
        onClick={onclick}
      >
        {children}
      </button>
    </>
  );
};
