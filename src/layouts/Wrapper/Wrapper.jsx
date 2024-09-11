import { Item } from "../../components/Item/Item";
import { List } from "../../components/List/List";
import { Button } from "../../ui/Button/Button";
import { Form } from "../../ui/Form/Form";
import s from "./Wrapper.module.scss";

export const Wrapper = ({
  completeTaskArr,
  inputHandler,
  taskArr,
  deleteAll,
  deleteByCrossBtn,
  deleteCompletedTasks,
  findChecked,
}) => {
  return (
    <div className={s.wrapper}>
      <Form
        completeTaskArr={completeTaskArr}
        inputHandler={inputHandler}
      ></Form>

      {!!taskArr.length && (
        <>
          <List>
            {taskArr.map((el) => (
              <Item
                key={el.id}
                task={el.task}
                done={el.done}
                id={el.id}
                deleteByCrossBtn={deleteByCrossBtn}
                findChecked={findChecked}
              ></Item>
            ))}
          </List>

          <div className={s.bottom__bts}>
            <Button onclick={deleteCompletedTasks} color="grey">
              Удалить завершенные
            </Button>
            <Button onclick={deleteAll} color="red">
              Удалить все
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
