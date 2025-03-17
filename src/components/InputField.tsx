const InputField = ({text, handleInput, handleClick}) => {
    return <label>
        <input value={text} type="text" onChange={(e) => handleInput(e.target.value)}/>
        <button onClick={handleClick}>Add To do</button>
    </label>
}

export default InputField;