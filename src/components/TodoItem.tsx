import {useDispatch} from "react-redux";
import {removeTodo, toggleTodoComplete} from "../store/todoSlice.ts";

interface TodoProps {
    id: string;
    text: string;
    completed: boolean;
    removeTodo: (id:string) => void;
    setComplete: (id:string) => void;
}

const TodoItem = ({id, text, completed}: TodoProps) => {
    const dispatch = useDispatch()

    return <li>
        <input onChange={() => dispatch(toggleTodoComplete({id}) )} type="checkbox" checked={completed}/>
        <span>{text}</span>
        <span onClick={() => dispatch(removeTodo({id}))} className='delete'>&times;</span>
    </li>
}

export default TodoItem