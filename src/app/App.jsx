import { useEffect, useState } from "react";
import "./styles/global.css";
import { Container } from "../layouts/Container/Container";
import { Wrapper } from "../layouts/Wrapper/Wrapper";

function App() {
  const [taskArr, setTaskArr] = useState([]);
  const [inputValue, setInputValue] = useState("");
  // функция добавления Таски в рендер и в массив
  function completeTaskArr(evt) {
    evt.preventDefault();

    if (inputValue != "") {
      setTaskArr([
        ...taskArr,
        {
          task: inputValue,
          id: Date.now(),
          done: false,
        },
      ]);
    }
    evt.target.reset(); // !!! !!! !!! !!! !!! !!! !!! !!! !!! !!! !!! !!! !!! !!! !!!
    setInputValue(""); // !!! !!! !!! !!! !!! !! !!! !!! !!! !!! !!! !!! !!! !!! !!! !!!
    console.log(inputValue);
  }
  //функция распознования что вводит пользователь в ИНПУТ
  function inputHandler(evt) {
    setInputValue(evt.target.value.trim());
  }
  //функция очищения всех тасок по кнопке "Удалить всё"
  function deleteAll() {
    setTaskArr([]);
  }
  //Удаление тасок по крестикам
  function deleteByCrossBtn(id) {
    setTaskArr(taskArr.filter((el) => el.id !== id));
  }
  //поиск тасок по чекбоксу. Смена false на true при нажатии
  function findChecked(id) {
    const checkedTask = taskArr.find((el) => el.id == id);
    checkedTask.done = !checkedTask.done;
    console.log(checkedTask);
  }
  //удаление выполненных тасок по кнопке "удалить завершенные"
  function deleteCompletedTasks() {
    setTaskArr(taskArr.filter((el) => !el.done));
  }
  // console.log(taskArr);

  return (
    <>
      <Container>
        <h1 className="title">ToDo List</h1>
        <Wrapper
          completeTaskArr={completeTaskArr}
          inputHandler={inputHandler}
          taskArr={taskArr}
          findChecked={findChecked}
          deleteByCrossBtn={deleteByCrossBtn}
          deleteCompletedTasks={deleteCompletedTasks}
          deleteAll={deleteAll}
        ></Wrapper>
      </Container>
    </>
  );
}

export default App;
