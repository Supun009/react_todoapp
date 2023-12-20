import { useState } from "react"
import './module.todolist.css'

export default function TodoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    

    function handleInputChange(e){
        setNewTask(e.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
        setTasks(t => [...t, newTask]);  //([...tasks, newTask])
        setNewTask("");
    }
}

    function deleteTask(index){
        const updatTasks = tasks.filter((_, i) => i !== index);   
        setTasks(updatTasks);
    }
    function moveTaskUp(index){
        if(index > 0){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index - 1]] =
            [updatedTask[index - 1], updatedTask[index]];
            setTasks(updatedTask);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length-1){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index + 1]] =
            [updatedTask[index + 1], updatedTask[index]];
            setTasks(updatedTask);
        }
    }


    return(
        <div className="todolist">
            <h1>To-Do-List</h1>

            <div>
                <div>
                <input type="text" 
                placeholder="Enter a task"
                value={newTask}
                onChange={handleInputChange}/>
                
                <button className="add-button"
                onClick={addTask}>
                    Add
                </button>
                </div>

                <ol>
                    {tasks.map((task, index)=>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button 
                        className="delet-button"
                        onClick={() => deleteTask(index)}>
                        delete
                        </button>

                        <button 
                        className="move-task"
                        onClick={() => moveTaskUp(index)}>
                        👆
                        </button>

                        <button 
                        className="move-task"
                        onClick={() => moveTaskDown(index)}>
                        👇
                        </button>
                    </li>
                    )}
                </ol>

            </div>

        </div>
    )
}