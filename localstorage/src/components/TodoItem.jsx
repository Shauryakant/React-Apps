import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoItem({todo}) {
  const { toggleComplete, updateTodo, deleteTodo } = useTodo();
  const [msg, setMsg] = useState(todo.todo);

  const [isTodoEditable, setTodoEditable] = useState(false);
    const deletethis=()=>{
        deleteTodo(todo.id)
    }
    const editTodo=()=>{
        updateTodo(todo.id,{...todo,todo:msg});
        console.log("done")
        setTodoEditable(false)
    }
  return (
    <div
      
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}
    >
      <input 
       checked={todo.completed}
       onChange={()=>toggleComplete(todo.id)}
       type="checkbox" className="cursor-pointer" />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"}`}
        value={msg}
        onChange={(e)=>setMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
      onClick={()=>{
        if(todo.completed) return true;
        if(isTodoEditable) {
            editTodo()
        }
        else setTodoEditable((prev)=>!prev);
      }}
      disabled={todo.completed}>
        
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      <button onClick={()=>deleteTodo(todo.id)} className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0">
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
