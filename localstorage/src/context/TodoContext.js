import { createContext,useContext } from "react";

export const TodoContext=createContext({
    todo: [
        {
            id:1,
            todo:"msg",
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    deleteTodo:(todo,id)=>{},
    updateTodo: (id)=>{},
    toggleComplete:(id)=>{}
})

export const useTodo=()=>{
    return useContext(TodoContext);
}

export const TodoProvider=TodoContext.Provider