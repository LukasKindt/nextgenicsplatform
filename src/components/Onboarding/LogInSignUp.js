import React from 'react'
import {Button} from '@material-ui/core';
import 'react-intl-tel-input/dist/main.css'

export const LogInSignUp = ({handleLogIn, handleRegister}) => {

    return (
        <div className="mainContainer">
            <Button onClick={handleLogIn}>Log In</Button>
            <Button onClick={handleRegister}>Sign Up</Button>
        </div>
    )
}

export default LogInSignUp