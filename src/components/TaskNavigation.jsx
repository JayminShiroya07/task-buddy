import { Outlet } from "react-router-dom";
import Header from "./Header";
import TaskHeader from "./TaskHeader";

export default function TaskNavigation(){
    return(
        <>
            <TaskHeader/>
            <main className="p-2 px-3 w-full">
                <Outlet/>
            </main>
        </>
    )
}