import React from 'react';
import './Todo.css';

function Todo() {
    const [txt, setTxt] = React.useState('');
    const [arr, setArr] = React.useState([]);

    const changeUserInput = (input) => {
        setTxt(input);
    };

    const addToList = (input) => {
        let myArr = [...arr];
        myArr.push(input);
        setArr(myArr);
        setTxt('');
    };

    const deleteItem = (index) => {
        let myArr = [...arr];
        myArr.splice(index, 1);
        setArr(myArr);
    };

    const edit = (index) => {
        setTxt(arr[index]);
        setArr(arr.filter((val, i) => i !== index));
    };

    return (
        <div className="todo-container">
             <h2 style={{ color: ' #ddd' }}>TODO LIST</h2>
            <input
                type="text"
                value={txt}
                onChange={(e) => changeUserInput(e.target.value)}
                placeholder="Enter task"
            />
            <button onClick={() => addToList(txt)}>Add Task</button>
            <ul>
                {arr.map((val, index) => (
                    <li key={index}>
                        <span>{val}</span>
                        <button onClick={() => deleteItem(index)}>Delete</button>
                        <button onClick={() => edit(index)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
