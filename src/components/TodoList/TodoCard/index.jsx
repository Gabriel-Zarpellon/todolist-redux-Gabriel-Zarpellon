import { useDispatch } from "react-redux";
import { completeTodoThunk, removeTodoThunk } from "../../../store/modules/todo/thunks";
import { StyledLabel} from "../../../styles/typography";
import { StyledInputContainer, StyledListItem } from "./style";
import { IoIosCloseCircle } from "react-icons/io";

export function TodoCard({ todo, index }) {
  const dispatch = useDispatch();

  return (
    <StyledListItem>
      <StyledInputContainer>
        <input id={`checkbox${index}`} type="checkbox" checked={todo.status} onChange={() => dispatch(completeTodoThunk(index, todo, todo.status))}/>
        <StyledLabel htmlFor={`checkbox${index}`}>{todo.description}</StyledLabel>
      </StyledInputContainer>
      <button onClick={() => dispatch(removeTodoThunk(todo.id))}><IoIosCloseCircle  size={21}/></button>
    </StyledListItem>
  );
}
