import './App.css'
import {useState} from "react";
import TodoList from "./components/TodoList.tsx";
import InputField from "./components/InputField.tsx";
import {useDispatch} from "react-redux";
import {addTodo} from './store/todoSlice.ts'

const App = () => {
    const [text, setText] = useState<string>('')
    const dispatch = useDispatch()
    const addTask = () => dispatch(addTodo({text}))

    return <>
        <InputField text={text} handleClick={addTask} handleInput={setText}/>
        <TodoList/>
    </>
}

export default App
