import DropDown from "./DropDown";
import Input from "./Input";

export default function AddTask() {
    return (
        <div className="w-full flex justify-center p-5">
            <div className="w-full md:w-2/5 text-center rounded-md overflow-hidden border">
                <div className="w-full p-3 md:text-2xl font-bold text-white bg-cyan-800">
                    Add Task
                </div>
                <div className="flex flex-col gap-4 p-2">
                    <Input
                        id="title"
                        name="title"
                        label="Title"
                        type="text"
                        placeholder="Enter Task Title"
                    />
                    <Input
                        id="description"
                        name="description"
                        label="Description"
                        type="textarea"
                        textarea
                        placeholder="Enter Task Description"
                    />
                    
                    <DropDown id="status" name="status" label="Status">
                        <option value="0">---select Status---</option>
                        <option value="done">Completed</option>
                        <option value="Pending">Incomplete</option>
                    </DropDown>

                </div>
                <div className="w-full bg-cyan-800 p-2 text-left">
                    <button className="px-3 bg-cyan-600 rounded font-bold shadow-md active:bg-cyan-400 hover:bg-cyan-500">Add</button>
                </div>
            </div>
        </div>
    )
}