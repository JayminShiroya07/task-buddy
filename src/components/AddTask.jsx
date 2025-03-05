import TodoForm from "./TodoForm";

export default function AddTask() {

    return (
        <div className="w-full flex justify-center p-5">
            <TodoForm method="post"/>
        </div>
    )
}