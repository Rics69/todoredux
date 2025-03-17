import './App.css'
import {useState} from "react";
import TodoList from "./components/TodoList.tsx";
import InputField from "./components/InputField.tsx";

interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

const App = () => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [text, setText] = useState<string>('')

    const handleClick = () => {
        if (text.trim().length) {
            setTodos([
                ...todos,
                {
                    id: new Date().toISOString(),
                    text,
                    completed: false
                }
            ])
        }
        setText('')
    }

    const removeTodo = (todoId: string) => {
        setTodos(todos.filter(todo => todo.id !== todoId))
    }

    const setComplete = (todoId: string) => {
        setTodos(todos.map(todo => {
            if (todo.id !== todoId) return todo;

            return {
                ...todo,
                completed: !todo.completed
            }
        }))
    }

    return <>
        <InputField text={text} handleClick={handleClick} handleInput={setText}/>
        <TodoList todos={todos} setComplete={setComplete} removeTodo={removeTodo} />
    </>
}

export default App
