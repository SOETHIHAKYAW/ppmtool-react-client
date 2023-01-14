import ProjectTask from "./ProjectTask"

function TodoList(props){

    return props.projectTasks.map((pt)=>{
        return <ProjectTask 
             key={pt.projectSequence}
             projectSequence={pt.projectSequence}
             priority={pt.priority}
             summary={pt.summary}
             acceptanceCriteria={pt.acceptanceCriteria}
        />
     })
}

export default TodoList