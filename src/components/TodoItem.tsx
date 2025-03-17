interface TodoProps {
    id: string;
    text: string;
    completed: boolean;
    removeTodo: (id:string) => void;
    setComplete: (id:string) => void;
}

const TodoItem = ({id, text, completed, removeTodo, setComplete}: TodoProps) => {
    return <li>
        <input onChange={() => setComplete(id)} type="checkbox" checked={completed}/>
        <span>{text}</span>
        <span onClick={() => removeTodo(id)} className='delete'>&times;</span>
    </li>
}

export default TodoItem