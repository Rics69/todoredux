import TodoItem from "./TodoItem.tsx";

interface TodoItemProp {
    id: string;
    text: string;
    completed: boolean;
}

interface TodoProps {
    todos: TodoItemProp[];
    setComplete: (id: string) => void;
    removeTodo: (id: string) => void;
}

const TodoList = ({todos, setComplete, removeTodo}: TodoProps) => {
    return <ul>
        {todos.map(todo => <TodoItem key={todo.id} setComplete={setComplete} removeTodo={removeTodo} {...todo} />)}
    </ul>
}

export default TodoList