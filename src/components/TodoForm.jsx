import { useActionState, useRef } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../store/todoSlice";
import { sendTaskData } from "../store/todo-action";
import { useNavigate, useParams } from "react-router-dom";

export default function TodoForm({ method, todo }) {
    const navigate = useNavigate();
    const inputCss = "p-1 w-full rounded outline-1";

    const dispatch = useDispatch();
    const params = useParams();

    function signupAction(prevFormState, formData) {
        let status = "Incomplete";
        if(todo){
            status = formData.get('status');
        }
        const newTask = {
            id: params.taskId,
            task : {

                title: formData.get('title'),
                description: formData.get('description'),
                status
            } 
        }

        dispatch(sendTaskData(method,newTask));
        navigate('../')
    }

    const [formState, formActoin] = useActionState(signupAction, { errors: null });

    return (
        <div className="w-full flex justify-center p-2">
            <div className="w-full md:w-2/5 text-center rounded-md overflow-hidden border">
                <div className="w-full p-3 md:text-2xl font-bold text-white bg-cyan-800">
                    {todo ? "Add Task" : "Edit Task"}
                </div>
                <form action={formActoin}>
                    <div className="flex flex-col gap-4 p-2">
                        <div className="flex flex-col items-start gap-1">
                            <label htmlFor="title" className="text-gray-900">Title</label>
                            <input
                                id="title"
                                name="title"
                                type="text"
                                placeholder="Enter Task Title"
                                className={inputCss}
                                defaultValue={todo ? todo.title : ''}
                            />
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <label htmlFor="description" className="text-gray-900">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                type="textarea"
                                placeholder="Enter Task Description"
                                className={inputCss}
                                defaultValue={todo ? todo.description : ''}
                            />
                        </div>
                        {todo && (
                            <>
                                <div className="flex flex-col items-start gap-1">
                                    <label htmlFor="status" className="text-gray-900">status</label>
                                    <select
                                        id="status"
                                        name="status"
                                        className={inputCss}
                                        defaultValue={todo.status ? "Complete" : "Incomplete"}
                                    >
                                        <option value="-">---select status ---</option>
                                        <option value="Complete">Complete</option>
                                        <option value="Incomplete">Incomplete</option>
                                    </select>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="w-full bg-cyan-800 p-2 text-left">
                        <button
                            type="submit"
                            className="px-3 bg-cyan-600 rounded font-bold shadow-md active:bg-cyan-400 hover:bg-cyan-500">
                                {method === "PATCH" ? "Update" : "Add"}
                            </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
