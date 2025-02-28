import { NavLink } from "react-router-dom";
import DropDown from "./DropDown";
import Input from "./Input";

export default function TaskHeader() {
    
    const linkActive = "px-4 bg-cyan-800 py-1 px-6 rounded font-semibold text-white shadow-xl";
    const unActive = "px-2 md:px-4 bg-cyan-100 py-1 px-6 rounded";
    return (
        <header className="w-full flex justify-evenly gap-5">
            <div className="flex gap-5">
                <NavLink to='/Tasks' className={({ isActive }) => isActive ? linkActive : unActive} end>
                    <i class="fas fa-list-ul"></i> All Tasks</NavLink>
                <NavLink to="AddTask" className={({ isActive }) => isActive ? linkActive : unActive}>
                    <i className='fas fa-plus-circle'></i> Add Tasks</NavLink>
            </div>
            <DropDown id="filter" name="filter" >
                <option value="completed">Completed</option>
                <option value="incomplete">Incomplete</option>
            </DropDown>
        </header>
    )
}