import Backlog from "../project-task/Backlog"
import CreateProjectTaskButton from "../project-task/CreateProjectTaskButton"

function ProjectBoard(){
    return (
        <div class="container">
        <CreateProjectTaskButton/>
        <br />
        <hr />
        <Backlog />
    </div>
    )
}

export default ProjectBoard