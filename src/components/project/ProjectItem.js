import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { deleteProject } from "./projectSlice";
import { useState } from "react";
import ConfirmModal from "../utility/ConfirmModal";
import Backdrop from "../utility/Backdrop";
import { getToken } from "../auth/authSlice";
import { resetStatus } from "../project-task/projectTaskSlice";

function ProjectItem(props){
    const token = useSelector(getToken)

    const [isModalOpen,setModalOpen] = useState(false)
    const dispatch = useDispatch();

    function deleteHandler(){
        setModalOpen(true);
    }

    function backdropHandler(){
        setModalOpen(false);
    }

    function cancelHandler(){
        setModalOpen(false);
    }

    function confirmHandler(){
        dispatch(deleteProject({projectId:props.id,token})).unwrap()

        setModalOpen(false)
    }

    const resetStatusHandler = ()=>{
        dispatch(resetStatus())
    }

    return (
        <div className="container">
        <div className="card card-body bg-light mb-3">
            <div className="row">
                <div className="col-2">
                    <span className="mx-auto">{props.id}</span>
                </div>
                <div className="col-lg-6 col-md-4 col-8">
                    <h3>{props.projectName}</h3>
                    <p>{props.description}</p>
                    <span>{props.startDate}</span> <br />
                    <span>{props.endDate}</span>
                </div>
                <div className="col-md-4 d-none d-lg-block">
                    <ul className="list-group">
                        <Link to={`/project/projectboard/${props.id}`} onClick={resetStatusHandler}>
                            <li className="list-group-item board">
                                <i className="fa fa-flag-checkered pr-1">Project Board </i>
                            </li>
                        </Link>
                        <Link to={`/project/edit/${props.id}`}>
                            <li className="list-group-item update">
                                <i className="fa fa-edit pr-1">Update Project Info</i>
                            </li>
                        </Link>
                        <Link onClick={deleteHandler}>
                            <li className="list-group-item delete">
                                <i className="fa fa-minus-circle pr-1">Delete Project</i>
                            </li>
                        </Link>
                    </ul>
                    {isModalOpen && <ConfirmModal onCancel={cancelHandler} onConfirm={confirmHandler}/>}
                    {isModalOpen && <Backdrop onBackdrop={backdropHandler}/>} 
                </div>
            </div>
        </div>
        
    </div>
    );
}

export default ProjectItem;