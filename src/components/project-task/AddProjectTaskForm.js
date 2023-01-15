import { Link,useParams } from "react-router-dom"
import { useDispatch,useSelector } from "react-redux"
import { useState } from "react"
import { createProjectTask,resetStatus } from "./projectTaskSlice"
import { getToken } from "../auth/authSlice"

function AddProjectTaskForm(){

    const { projectId } = useParams()

    const [summary,setSummary] = useState('')
    const [acceptanceCriteria,setAcceptanceCriteria] = useState('')
    const [dueDate,setDueDate] = useState('')
    const [priority,setPriotiry] = useState('')
    const [status,setStatus] = useState('')
    const [requestStatus,setRequestStatus] = useState('idle')

    const onSummaryInputChange = e => setSummary(e.target.value)
    const onAcceptanceCriteriaInputChange = e => setAcceptanceCriteria(e.target.value)
    const onDueDateInputChange = e => setDueDate(e.target.value)
    const onProrityInputChange = e => setPriotiry(e.target.value)
    const onStatusInputChange = e => setStatus(e.target.value)

    const canSave = [summary,acceptanceCriteria,dueDate,priority,status].every(Boolean) && requestStatus === 'idle'


    const dispatch = useDispatch()
    const token = useSelector(getToken)

    const onFormSubmit = (event) => {
        event.preventDefault()

        if(canSave && token){
            setRequestStatus('pending')

            try {
                dispatch(createProjectTask({
                    projectTask:{
                        summary,
                        acceptanceCriteria,
                        dueDate,
                        priority,
                        status,
                    },token
                    ,projectId
                })).unwrap()
            } catch (error) {
                console.log()
                console.error(error)
            }finally{
                setRequestStatus('idle')

                setSummary('')
                setAcceptanceCriteria('')
                setDueDate('')
                setPriotiry('')
                setStatus('')
            }
        }
    }

    const resetStatusHandler = () => {
        dispatch(resetStatus())
    }

    return (
        <div className="add-PBI">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <Link to={`/project/projectboard/${projectId}`} onClick={resetStatusHandler} className="btn btn-light">
                        Back to Project Board
                    </Link>
                    <h4 className="display-4 text-center">Add /Update Project Task</h4>
                    <p className="lead text-center">Project Name + Project Code</p>
                    <form onSubmit={onFormSubmit}>
                        <div className="form-group">
                            <input type="text" 
                            className="form-control form-control-lg" 
                            placeholder="Project Task summary" 
                            value={summary}
                            onChange={onSummaryInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control form-control-lg" 
                            placeholder="Acceptance Criteria" 
                            value={acceptanceCriteria}
                            onChange={onAcceptanceCriteriaInputChange}
                            ></textarea>
                        </div>
                        <h6>Due Date</h6>
                        <div className="form-group">
                            <input type="date" 
                            className="form-control form-control-lg"
                            value={dueDate}
                            onChange={onDueDateInputChange}
                             />
                        </div>
                        <div className="form-group">
                            <select className="form-control form-control-lg"
                            value={priority}
                            onChange={onProrityInputChange}
                            >
                                <option value={0}>Select Priority</option>
                                <option value={1}>High</option>
                                <option value={2}>Medium</option>
                                <option value={3}>Low</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <select className="form-control form-control-lg"
                            value={status}
                            onChange={onStatusInputChange}
                            >
                                <option value="">Select Status</option>
                                <option value="TODO">TO DO</option>
                                <option value="IN_PROGRESS">IN PROGRESS</option>
                                <option value="DONE">DONE</option>
                            </select>
                        </div>

                        <input type="submit" 
                        className="btn btn-primary btn-block mt-4" 
                        disabled={!canSave}
                        />
                    </form>
                </div>
            </div>
        </div>
    </div>

    )
}

export default AddProjectTaskForm