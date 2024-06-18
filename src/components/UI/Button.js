import React from "react";
import classes from './Button.module.css'
const Button = props => {
    return <Button className={classes.Button} type={props.type || 'button'} onClick={props.onClick}>
        {props.chilren}
    </Button>
}

export default Button;