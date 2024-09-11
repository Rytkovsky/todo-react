import s from "./Input.module.scss";
import clsx from "clsx";

export const Input = ({ onChange, text, checkbox, type }) => {
  return (
    <>
      <input
        className={clsx(s.input, {
          [s.input__text]: text === "text",
          [s.input__checkbox]: checkbox === "checkbox",
        })}
        onChange={onChange}
        type={type}
      ></input>
    </>
  );
};
