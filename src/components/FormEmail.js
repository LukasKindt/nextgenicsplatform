import React from 'react'
import useForm from './useForm'
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Button, TextField} from '@material-ui/core';
import SendSharpIcon from '@material-ui/icons/SendSharp';
import BlockSharpIcon from '@material-ui/icons/BlockSharp';
import 'react-intl-tel-input/dist/main.css'

const useStyles = makeStyles({
    formContainer: {
        position: 'relative',
        width: '28.125rem',
        height: 'auto',
        padding: '2rem',
    },
    inputField: {
        width: '100%',
        marginBottom: '1rem'
    }
})

export const FormEmail = ({activeStep, steps, handleNext, handleChange, formValues, disabled}) => {
    const stateSchema = {
        email: {value: formValues.email, error: ""}
    }

    const stateValidatorSchema = {
        email: {
            required: true, 
            validator: {
                func: value => /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(value),
                error: 'Invalid email format!'
            }
        }
    }

    const {values, errors, dirty, handleOnChange} = useForm(stateSchema, stateValidatorSchema)

    const {email} = values; 

    const classes = useStyles();

    return (
        <div className="mainContainer" style={disabled ? {pointerEvents: "none", opacity: "0.4"} : {}}>
            <Typography variant='h5' style={{color: '#999', textAlign: "center"}}>What is your email?</Typography>
            <div className={classes.formContainer}>
          
                    <TextField className={classes.inputField} label='Email' variant='outlined' name="email" value={email} onChange={e => {handleOnChange(e); handleChange('email', e)}} />
                    {errors.email && dirty.email && (
                        <Typography style={{marginTop: '0', color: 'red', fontWeight: '200'}}>{errors.email}</Typography>
                    )}
                    {
                        !disabled ? (
                        errors.email ? (
                            <Button className="disabledBtn" disabled type='submit'>{activeStep === steps.length - 1 ? "Finish" : "Next"}</Button>
                        ): (
                            <Button className="nextBtn" type='submit' onClick={handleNext}>{activeStep === steps.length - 1 ? "Finish" : "Next"}</Button>
                        )) : (<></>)
                    }
              
            </div>
        </div>
    )
}

export default FormEmail