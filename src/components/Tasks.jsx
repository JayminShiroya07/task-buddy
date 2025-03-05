import { useDispatch, useSelector } from "react-redux";
import TaskItems from "./TaskItems";
import { useEffect, useState } from "react";
import { replace } from "react-router-dom";
import { todoActions } from "../store/todoSlice";
import { uiAction } from "../store/uiSlice";
import { fetchTaskData } from "../store/todo-action";
import ErrorPage from "./ErrorPage";

export default function Tasks() {

    const dispatch = useDispatch();
    const todoList = useSelector(state => state.todo.todos);
    const isLoading = useSelector(state => state.ui.loading);
    const isError = useSelector(state => state.ui.isError);
    const error = useSelector(state => state.ui.error);

    useEffect(() => {
        console.log("started")
        dispatch(uiAction.changeLoading({
            isLoading: true
        }));

        dispatch(fetchTaskData());

        console.log(error)
        dispatch(uiAction.changeLoading({
            isLoading: false
        }));

    }, [dispatch]);
    

    if(isError){
        console.log("error => ",error)
        return <ErrorPage error={error.message}/>
    }



    return (
        <div className="flex w-full flex-col items-center p-5">
            <div className="md:px-10 justify-center flex w-full items-center">
                <div className="grid grid-cols-1 md:grid-cols-3 w-full md:gap-5">
                    {isLoading ? <p>Loading....</p> : (
                        todoList.map(task => (
                            <TaskItems key={task.id} task={task} />
                        ))
                    )}
                </div>
            </div>
        </div>

    )
}

