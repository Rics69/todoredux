import TodoItem from "./TodoItem.tsx";
import {useSelector} from "react-redux";

const TodoList = () => {
    const todos = useSelector(state => state.todos.todos)
    return <ul>
        {todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
    </ul>
}

export default TodoList