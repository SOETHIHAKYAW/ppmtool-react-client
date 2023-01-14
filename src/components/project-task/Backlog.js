import { useSelector,useDispatch } from "react-redux"
import { selectTaskWithTodo,selectTaskWithProgress,selectTaskWithDone,getStatus,getError,fetchProjectTasks} from "./projectTaskSlice"
import { getToken } from "../auth/authSlice"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import TodoList from "./TodoList"
import InProgressList from "./InProgressList"
import DoneList from "./DoneList"

function Backlog(){
    const { projectId } = useParams()
    const todoProjectTasks = useSelector(selectTaskWithTodo)
    const inProgressProjectTasks = useSelector(selectTaskWithProgress)
    const doneProjectTasks = useSelector(selectTaskWithDone)
    const token = useSelector(getToken)
    const status = useSelector(getStatus)
    const error = useSelector(getError)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(status === 'idle'){
            dispatch(fetchProjectTasks({
                projectId:String(projectId),
                token,
            }))
        }else{
            console.error('status must be idle')
        }
    },[dispatch,status,projectId,token])

    let content

    if(status === 'pending'){
        content = <p>Loading.......</p>
    }

    if(status === 'succeeded'){
        content = (
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card text-center mb-2">
                            <div class="card-header bg-secondary text-white">
                                <h3>TO DO</h3>
                            </div>
                        </div>
                        <TodoList projectTasks={todoProjectTasks}/>
                    </div>
                    <div class="col-md-4">
                        <div class="card text-center mb-2">
                            <div class="card-header bg-primary text-white">
                                <h3>In Progress</h3>
                            </div>
                        </div>
                        <InProgressList projectTasks={inProgressProjectTasks}/>
                    </div>
                    <div class="col-md-4">
                        <div class="card text-center mb-2">
                            <div class="card-header bg-success text-white">
                                <h3>Done</h3>
                            </div>
                        </div>
                        <DoneList projectTasks={doneProjectTasks}/>
                    </div>
                </div>
            </div>
        )
    }

    if(status === 'failed'){
        content = <p>{ error }</p>
    }

    return content
}

export default Backlog