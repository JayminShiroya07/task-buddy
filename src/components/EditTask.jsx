import { useParams } from "react-router-dom"

export default function EditTask() {

    const params = useParams();

    return (
        <div>
            Edit task works...!
            <p>
                {params.taskId}
            </p>
        </div>
    )
}