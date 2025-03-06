import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { todoActions } from "../store/todoSlice";
import { fetchTaskDataById } from "../store/todo-action";
import TodoForm from "./TodoForm";

export default function EditTask() {

    const params = useParams();

    const dispatch = useDispatch();
    const selectedTodo = useSelector(state => state.todo.selectedTodo)

    useEffect(()=>{
        dispatch(fetchTaskDataById(params.taskId))
        
    },[dispatch])

    return (
        <div>
            <TodoForm method="PATCH" todo={selectedTodo}/>
        </div>
    )
}