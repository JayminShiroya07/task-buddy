import { TaskList } from "../Util/taskList";
import TaskItems from "./TaskItems";

export default function Tasks() {


    return (
        <>
            <h1 className="text-center font-bold p-3 text-2xl md:text-3xl">All Tasks</h1>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {TaskList.map(task => (
                        <TaskItems key={task.id} task={task} />
                    ))}
                </div>
            </div>
        </>

    )
}