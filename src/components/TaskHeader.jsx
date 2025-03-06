import { NavLink } from "react-router-dom";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../store/todoSlice";
import { fetchTaskData, searchTaskByStatus } from "../store/todo-action";

export default function TaskHeader({toogle}) {

    const searchValue = useRef();
    const dispatch = useDispatch();
    const todoList = useSelector(state => state.todo.todos)

    function handleSearch(){
        const search = searchValue.current.value;

        if(search === 'all'){
            dispatch(fetchTaskData());
        }
        else{
            dispatch(searchTaskByStatus(search));
        }
    }

    
    const linkActive = "px-4 bg-cyan-800 py-1 px-6 rounded font-semibold text-white shadow-xl";
    const unActive = "px-2 md:px-4 bg-cyan-100 py-1 px-6 rounded";
    return (
        <header className="w-full flex justify-evenly gap-5">
            <div className="flex gap-5">
                <NavLink to='/Tasks' className={({ isActive }) => isActive ? linkActive : unActive} end>
                    <i className="fas fa-list-ul"></i> All Tasks</NavLink>
                    <NavLink to='AddTask' className={({ isActive }) => isActive ? linkActive : unActive} end>
                    <i className="fas fa-list-ul"></i> Add Task</NavLink>
            </div>
            <select id="filter" name="filter" 
                ref={searchValue} 
                className="p-1 rounded outline-1"
                onChange={handleSearch}    
            >
                <option value="all">All</option>
                <option value="Complete">Completed</option>
                <option value="Incomplete">Incomplete</option>
            </select>
        </header>
    )
}