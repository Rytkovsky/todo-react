import { Children } from "react";
import { Button } from "../../ui/Button/Button";
import s from "./Item.module.scss";
import { Input } from "../../ui/Input/Input";

export const Item = ({ task, done, id, deleteByCrossBtn, findChecked }) => {
  return (
    <>
      <li className={s.item}>
        <Input
          onChange={() => findChecked(id)}
          checked={done}
          type="checkbox"
          checkbox="checkbox"
        />
        <p className={s.item__text}>{task} </p>
        <Button icon={true} onclick={() => deleteByCrossBtn(id)}>
          ❌
        </Button>
      </li>
    </>
  );
};

// коллбек функция для обработки события // 9 строка
// onChange={true} checked={done}
/* <input className={s.item__checkbox} type="checkbox"  />  */
