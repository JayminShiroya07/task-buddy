import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../store/todo-action";

export default function TaskItems({ todo }) {
    const dispatch = useDispatch();

    if (!todo) {
        return (
            <p>No Task Found..! </p>
        )
    }

    function handleDelete(id){
        const comfirm = confirm("Are you sure?");
        if(comfirm){
            dispatch(deleteTask(id));
        }
    }

    return (
        <>
            <div className="border rounded-lg mb-4 shadow-md overflow-hidden hover:scale-[102%] hover:shadow-xl flex flex-col justify-between">
                <div className="flex md:items-center mb-2 shadow shadow-black bg-cyan-800">
                    {/* <div className="w-1/5 font-bold text-center text-white text-3xl border-r-2">{task.id}</div> */}
                    <div className="font-bold text-white text-2xl px-3 text-center">{todo.task.title}</div>
                </div>
                <div className="mb-4 p-2 min-h-25 text-black">{todo.task.description}</div>
                <div className="bg-cyan-800 p-[6px] flex justify-between">
                    <div>
                        <Link to={`/Tasks/${todo.id}`} className="bg-cyan-600 ms-2 text-white px-4 py-1 rounded hover:bg-cyan-500 hover:text-black active:bg-cyan-600">
                            Edit
                        </Link>
                        <button 
                            onClick={() => handleDelete(todo.id)}
                            className="bg-red-600 ms-2 text-white px-4 py-1 rounded hover:bg-red-500 hover:text-black active:bg-red-600">
                            Delete
                        </button>
                    </div>
                    <div className="flex gap-3 justify-center items-center">
                        <div className="text-white font-semibold">{todo.task.status}</div>
                        <div className={`${todo.task.status === "Complete" ? "bg-green-500" : "bg-red-500"} h-4 w-4 rounded-full me-2`}></div>
                    </div>
                </div>
            </div>
        </>
    )
}