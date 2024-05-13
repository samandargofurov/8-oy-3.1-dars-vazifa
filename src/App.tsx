import React, { useEffect, useState } from "react";
import "./App.css";
import TodoInfo from "./components/TodoInfo";

interface Task {
  id?: number;
  title?:string;
}

function App() {
  const [tasks, setTasks] = useState<any>([]); 
  const [add, setAdd] = useState<{ title: string}>({title: ""});

  useEffect(() => {
    const oldTasks: Task[] | null = JSON.parse(localStorage.getItem('tasks') || '[]')
    setTasks(oldTasks)
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  },[tasks])

  function handleAdd(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    if(add?.title.trim() !== '') {
      const taskItem: Task | null = {
        id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
        title: add?.title
      }
      setTasks([...tasks, taskItem])
    } else {
      alert('please, enter task')
    }
    setAdd({title: ''})
  };

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    setAdd({...add, title: event.target.value})
  }

  return (
    <>
      <div className="container w-2/4 mx-auto mt-16">
        <div className="flex items-center justify-between">
          {/* <button className="btn btn-active btn-primary" onClick={handleAdd}>
            Add Task
          </button> */}
          <button
            className="btn btn-primary"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Add Task
          </button>

          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <input type="text" value={add?.title} onChange={handleChange} className="outline-none border border-gray-200 w-full p-2 rounded-lg" placeholder="Enter task" />
              <form method="dialog" className="modal-action flex gap-5">
                <button onClick={handleAdd} className="btn">Add</button>
                <button className="btn">Close</button>
              </form>
            </div>
          </dialog>

          <select className="select select-bordered w-28 max-w-sm">
            <option selected value={"all"}>
              All
            </option>
            <option value={"true"}>Active</option>
            <option value={"false"}>Inactive</option>
          </select>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg mt-10 flex flex-col gap-3">
          {
            tasks.length > 0 && tasks.map((el: any, index: any) => {
              return (
                <TodoInfo key={index} task={el.title}></TodoInfo>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default App;
