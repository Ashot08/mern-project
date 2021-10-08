import classes from './Alert.module.css';

export const Alert = (props) => {
    //types: nothing, info, error, success, warning


    return <>
        <div className={[classes.materialert, classes[props.type]].join(' ')}>
            <i className={classes['material-icons']}>ICON</i>
            <span>{props.text}</span>
            <button onClick={props.onClose} type="button" className={classes["close-alert"]}>×</button>
        </div>
    </>
}
