import { Link } from "react-router-dom"

function CreateProjectTaskButton(){
    return (
        <Link to='/project-task/create' class="btn btn-primary mb-3">
            <i class="fas fa-plus-circle"> Create Project Task</i>
        </Link>
    )
}

export default CreateProjectTaskButton