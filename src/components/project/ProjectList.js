import { useSelector } from "react-redux";
import ProjectItem from "./ProjectItem";
import { selectAllProjects } from "./projectSlice";

function ProjectList(){

    const projects = useSelector(selectAllProjects);

    const renderedProjects = projects.map(
        (project)=>(
                <ProjectItem 
                    id={project.projectIdentifier} 
                    projectName={project.projectName}
                    description={project.description}
                    startDate={project.startDate}
                    endDate={project.endDate}
                />)
    );

    return renderedProjects;

}

export default ProjectList;