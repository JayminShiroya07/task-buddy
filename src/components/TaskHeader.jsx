import { NavLink } from "react-router-dom";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../store/todoSlice";

export default function TaskHeader({toogle}) {

    const searchValue = useRef();
    const dispatch = useDispatch();

    function handleSearch(){
        const search = searchValue.current.value;
        dispatch(todoActions.filterTodos({
            search : search
        }));
    }



    function handleModal(){

    }
    
    const linkActive = "px-4 bg-cyan-800 py-1 px-6 rounded font-semibold text-white shadow-xl";
    const unActive = "px-2 md:px-4 bg-cyan-100 py-1 px-6 rounded";
    return (
        <header className="w-full flex justify-evenly gap-5">
            <div className="flex gap-5">
                <NavLink to='/Tasks' className={({ isActive }) => isActive ? linkActive : unActive} end>
                    <i className="fas fa-list-ul"></i> All Tasks</NavLink>
                <button className={linkActive} onClick={toogle}>
                    <i className='fas fa-plus-circle'></i> Add Tasks</button>
            </div>
            <select id="filter" name="filter" 
                ref={searchValue} 
                className="p-1 rounded outline-1"
                onChange={handleSearch}    
            >
                <option value="completed">Completed</option>
                <option value="incomplete">Incomplete</option>
            </select>
        </header>
    )
}