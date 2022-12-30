import ProjectList from "./project/ProjectList";
import CreateProjectButton from "./project/CreateProjectButton";

function Dashboard(){
    return (
        <div class="projects">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="display-4 text-center">Projects</h1>
                    <br />
                    <CreateProjectButton />
                    <br />
                    <hr />
                    <ProjectList />
                </div>
            </div>
        </div>
    </div>
    );
}

export default Dashboard;