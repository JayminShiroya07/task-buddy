import { Outlet } from "react-router-dom";
import TaskHeader from "./TaskHeader";
import { useState } from "react";

export default function TaskNavigation() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    function toogleModal() {
        console.log("togle works")
        setIsModalOpen(!isModalOpen);
    }

    return (
        <>
            <TaskHeader toogle={toogleModal} />
            <main className="p-2 px-3 w-full">

                <Outlet />
            </main>
        </>
    )
}