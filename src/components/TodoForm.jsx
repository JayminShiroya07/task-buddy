import { useActionState, useRef } from "react";

export default function TodoForm({ method, event }) {
    const inputCss = "p-1 w-full rounded outline-1";


    function signupAction(prevFormState, formData) {

        const newTask = {
            title: formData.get('title'),
            description: formData.get('description'),
            status : false,
            id: Math.random()
        }

        
    }

    const [formState, formActoin] = useActionState(signupAction, { errors: null });


    return (
        <div className="w-full flex justify-center p-5">
            <div className="w-full md:w-2/5 text-center rounded-md overflow-hidden border">
                <div className="w-full p-3 md:text-2xl font-bold text-white bg-cyan-800">
                    Add Task
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
                            />
                        </div>
                        {event && (
                            <>
                                <div className="flex flex-col items-start gap-1">
                                    <label htmlFor="status" className="text-gray-900">status</label>
                                    <select
                                        id="status"
                                        name="status"
                                        className={inputCss}
                                    >

                                        <option value="-">---select status ---</option>
                                        <option value="Pending">Complete</option>

                                        <option value="Pending">Incomplete</option>
                                    </select>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="w-full bg-cyan-800 p-2 text-left">
                        <button
                            type="submit"
                            className="px-3 bg-cyan-600 rounded font-bold shadow-md active:bg-cyan-400 hover:bg-cyan-500">Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
