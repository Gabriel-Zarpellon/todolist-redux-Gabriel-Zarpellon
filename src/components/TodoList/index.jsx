import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoThunk } from "../../store/modules/todo/thunks";
import { TodoCard } from "./TodoCard";
import { StyledContainer } from "../../styles/grid";
import { StyledParagraph, StyledTitle } from "../../styles/typography";
import { StyledBox, StyledTitleBox } from "./style";

export function TodoList() {
  const { todoList } = useSelector((state) => state);
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  function submit(e) {
    e.preventDefault();
    dispatch(addTodoThunk(value));
    setValue("");
  }

  useEffect(() => {
    function storeList() {
      localStorage.setItem("@TODOLIST", JSON.stringify(todoList));
    }
    storeList();
  }, [todoList]);

  return (
    <StyledContainer>
      <StyledBox>
        <div>
          <StyledTitleBox>
            <StyledTitle>Lista de Tarefas</StyledTitle>
          </StyledTitleBox>
          <form onSubmit={submit}>
            <input
              type="text"
              name="description"
              value={value}
              placeholder="Insira uma nova tarefa..."
              onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit">+</button>
          </form>
        </div>
        {todoList.length > 0 ? (
          <ul>
            {todoList.map((todo, index) => (
              <TodoCard key={index} todo={todo} index={index} />
            ))}
          </ul>
        ) : (
          <div>
            <StyledParagraph>Nada para fazer.</StyledParagraph>
          </div>
        )}
      </StyledBox>
    </StyledContainer>
  );
}
