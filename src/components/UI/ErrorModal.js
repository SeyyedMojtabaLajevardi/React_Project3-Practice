import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from './ErrorModal.module.css'

const ErrorModal = props => {
    return(
<div>
    <div className={classes.backdrop} onClick={props.onConfirm} />
    return <Card className ={classes.modal }>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.messge}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>OKay</Button>
        </footer>

    </Card>
    </div>
    )
};


export default ErrorModal;