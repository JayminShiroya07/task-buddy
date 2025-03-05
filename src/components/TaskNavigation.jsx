import { Outlet } from "react-router-dom";
import Header from "./Header";
import TaskHeader from "./TaskHeader";
import Modal from "./Modal";
import { useState } from "react";
import TodoForm from "./TodoForm";

export default function TaskNavigation() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    function toogleModal() {
        console.log("togle works")
        setIsModalOpen(!isModalOpen);
    }

    return (
        <>
            <Modal open={isModalOpen} >
                <div className="h-15 bg-cyan-800 flex justify-end p-2">
                    <button onClick={toogleModal} className="text-3xl">
                        <i class="fas fa-times-circle"></i>
                    </button>
                </div>
                <TodoForm event="dd"></TodoForm>
            </Modal>
            <TaskHeader toogle={toogleModal} />
            <main className="p-2 px-3 w-full">

                <Outlet />
            </main>
        </>
    )
}