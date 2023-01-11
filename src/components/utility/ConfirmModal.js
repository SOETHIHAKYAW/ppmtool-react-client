import classes from './ConfirmModal.module.css'

function ConfirmModal(props){
    function onCancel(){
        props.onCancel();
    }

    function onConfirm(){
        props.onConfirm();
    }

    const buttonClasses = classes.btn+' '+classes['btn--alt']

    return (
        <div className={classes.modal}>
            <p>Are you sure this Project to delete?</p>
            <button className={buttonClasses} onClick={onCancel}>Cancel</button>
            <button className={classes.btn} onClick={onConfirm}>Confirm</button>
        </div>
    );
}

export default ConfirmModal