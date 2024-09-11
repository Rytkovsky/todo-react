import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import s from "./Form.module.scss";

export const Form = ({ completeTaskArr, inputHandler }) => {
  return (
    <>
      <form onSubmit={completeTaskArr} className={s.form}>
        <Input text="text" onChange={inputHandler} type="text" />
        <Button color="black">Добавить</Button>
      </form>
    </>
  );
};
