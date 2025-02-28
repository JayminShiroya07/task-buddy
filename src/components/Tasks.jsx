import { TaskList } from "../Util/taskList";
import TaskItems from "./TaskItems";

export default function Tasks() {


    return (
        <div className="flex w-full flex-col items-center p-5">
            <div className="md:px-10 justify-center flex w-full items-center">
                <div className="grid grid-cols-1 md:grid-cols-3 w-full md:gap-5">
                    {TaskList.map(task => (
                        <TaskItems key={task.id} task={task} />
                    ))}
                </div>
            </div>
        </div>

    )
}