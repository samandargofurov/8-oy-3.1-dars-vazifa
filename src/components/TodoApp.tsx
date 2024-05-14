import { FC, useEffect, useState } from "react";
import Button from "./Button";
import { useRef } from "react";
import Filter from "./Filter";
import TodoItem from "./TodoItem";

interface TodoType {
  id: number;
  name: string;
  status: boolean
  date: string;
}

const TodoApp: FC = () => {
  const [todos, setTodos] = useState<TodoType[]>([])
  const nameRef = useRef<HTMLInputElement>(null)

  function getData() {
    let data: TodoType[] = []
    if (localStorage.getItem('todos') && localStorage.getItem('todos') != null) {
      data = JSON.parse(localStorage.getItem('todos')!)
    }

    return data
  }

  useEffect(() => {
    let stored = getData();
    setTodos(stored)
  }, [])

  function openModal() {
    if (document.getElementById("my_modal_2")) {
      (document.getElementById("my_modal_2") as HTMLFormElement).showModal();
    }
  }


  function handleAdd(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()

    if (nameRef && nameRef.current && nameRef.current.value) {
      const todo = {
        id: Date.now(),
        name: nameRef.current.value,
        date: new Date(),
        status: false
      }

      let copied = JSON.parse(JSON.stringify(todos))
      copied.push(todo)
      localStorage.setItem('todos', JSON.stringify(copied))
      setTodos(copied)
      nameRef.current.value = ''
    }
    

  }

  return (
    <>
      <div className="container w-2/4 mx-auto ">
        <h1 className="text-center text-5xl uppercase mt-8 font-semibold">
          todo list
        </h1>
        <div className="mt-8 flex justify-between">
          <Button click={openModal}></Button>
          <Filter></Filter>
        </div>

        <div className="todo-wrapper flex flex-col gap-5 bg-gray-300 rounded-xl p-4 mt-7">
          {
            todos.length && todos.map((el, index) => {
              return(
                <TodoItem key={index} data={el}></TodoItem>
              )
            })
          }
        </div>

        <dialog id="my_modal_2" className="modal">
          <div className="modal-box flex flex-col gap-5">
            <h1 className="text-center text-2xl font-bold">Enter task name</h1>
            <input ref={nameRef} type="text" placeholder="Type here" className="input input-bordered w-full" />
            <button className="btn btn-primary" onClick={handleAdd}>Add</button>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>

      </div>
    </>
  );
};

export default TodoApp;
