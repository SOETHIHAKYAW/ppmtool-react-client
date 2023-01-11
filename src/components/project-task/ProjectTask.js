import { Link } from "react-router-dom"

function ProjectTask(){
    return (
        <div class="card mb-1 bg-light">

                        <div class="card-header text-primary">
                            ID: projectSequence -- Priority: priorityString
                        </div>
                        <div class="card-body bg-light">
                            <h5 class="card-title">project_task.summary</h5>
                            <p class="card-text text-truncate ">
                                project_task.acceptanceCriteria
                            </p>
                            <Link to='/project-task/create' class="btn btn-primary">
                                View / Update
                            </Link>

                            <button class="btn btn-danger ml-4">
                                Delete
                            </button>
                        </div>
                    </div>
    )
}

export default ProjectTask