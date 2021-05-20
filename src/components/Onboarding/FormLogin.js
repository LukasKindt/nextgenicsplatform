import React from 'react'
import useForm from './useForm'
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Button, TextField } from '@material-ui/core';
import 'react-intl-tel-input/dist/main.css'

const useStyles = makeStyles({
    formContainer: {
        position: 'relative',
        width: '28.125rem',
        height: 'auto',
        padding: '2rem',
    },
    inputField: {
        width: '80%',
        marginBottom: '1rem',
        backgroundColor: 'rgba(255,255,255,0.6)'
    }
})

export const FormLogin = ({handleLogin, handleChange}) => {
    const stateSchema = {
        password: {value: "", error: ""},
    }

    const stateValidatorSchema = {
    }


    const {errors, dirty, handleOnChange} = useForm(stateSchema, stateValidatorSchema)

    const classes = useStyles();

    return (
        <div className="mainContainer">
            <Typography variant='h5' style={{color: '#999', textAlign: "center"}}>What is your Password?</Typography>
            <TextField autoFocus className={classes.inputField} label='Password' name="password" onChange={e => {handleOnChange(e); handleChange('password', e)}} />
                    {errors.password && dirty.password && (
                        <Typography style={{color: "red", textAlign: "start", width: '80%'}}>{errors.email}</Typography>
                    )}
                    {
                        
                        errors.password ? (
                            <Button className='registerButtonDisabled' disabled type='submit'>Continue</Button>
                        ): (
                            <Button className='registerButton' type='submit' onClick={handleLogin}>Continue</Button>
                        )
                    }
        </div>
    )
}

export default FormLogin