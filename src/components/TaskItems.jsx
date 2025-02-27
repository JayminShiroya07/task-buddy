import { Link } from "react-router-dom";

export default function TaskItems({ task }) {

    if (!task) {
        return (
            <p>No Task Found..! </p>
        )
    }

    return (
        <>
            <div className="border rounded-lg mb-4 shadow-md overflow-hidden hover:scale-[102%] hover:shadow-xl">
                <div className="flex md:items-center mb-2 shadow-md bg-cyan-800">
                    <div className="w-1/5 font-bold text-center text-white text-3xl border-r-2">{task.id}</div>
                    <div className="w-4/5 font-bold text-white text-2xl px-3 text-center">{task.title}</div>
                </div>
                <div className="mb-4 p-2 min-h-25 text-black">{task.description}</div>
                <div className="bg-cyan-800 p-1 flex justify-between">
                    <button className="bg-cyan-600 ms-2 text-white px-4 rounded hover:bg-cyan-500 hover:text-black active:bg-cyan-600">
                        Edit
                    </button>
                    <div className="flex gap-3 justify-center items-center">
                        <div className="text-white font-semibold">{task.status ? 'Completed':'In Progress'}</div>
                        <div className={`${task.status ? "bg-green-500":"bg-red-500"} h-4 w-4 rounded-full me-2`}></div>
                    </div>
                </div>
            </div>
        </>
    )
}