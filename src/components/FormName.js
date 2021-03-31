import React from 'react'
import useForm from './useForm'
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Button, TextField } from '@material-ui/core';
import SendSharpIcon from '@material-ui/icons/SendSharp';
import BlockSharpIcon from '@material-ui/icons/BlockSharp';
import 'react-intl-tel-input/dist/main.css'

const useStyles = makeStyles({
    formContainer: {
        position: 'relative',
        height: 'auto',
        padding: '2rem',
    },
    inputField: {
        width: '100%',
        marginBottom: '1rem'
    }
})

export const FormName = ({activeStep, steps, handleNext, handlePrev, handleChange, formValues, disabled}) => {
    const stateSchema = {
        firstName: {value: formValues.firstName, error: ""},
        lastName: {value: formValues.lastName, error: ""}
    }

    const stateValidatorSchema = {
        firstName: {
            required: true, 
            validator: {
                func: value => /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/.test(value),
                error: 'First name must be more than 1 character!'
            }
        },
        lastName: {
            required: true, 
            validator: {
                func: value => /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/.test(value),
                error: 'Last name must be more than 3 character!'
            }
        }
    }

    const {values, errors, dirty, handleOnChange} = useForm(stateSchema, stateValidatorSchema)

    const {firstName, lastName} = values; 

    const classes = useStyles();

    return (
        <div className="mainContainer" style={disabled ? {pointerEvents: "none", opacity: "0.4"} : {}}>
            <Typography variant='h5' style={{color: '#999', textAlign: "center"}}>What is your name?</Typography>
            <div className={classes.formContainer}>
                {!disabled? (
            <Button className="backBtn" onClick={handlePrev}>Back</Button>
                ):(<></>)}
                    <TextField className={classes.inputField} label='First Name' variant='outlined' name="firstName" value={firstName} onChange={e => {handleOnChange(e); handleChange('firstName', e)}}/>
                    {errors.firstName && dirty.firstName && (
                        <Typography style={{marginTop: '0', color: 'red', fontWeight: '200'}}>{errors.firstName}</Typography>
                    )}
                    <TextField className={classes.inputField} label='Last Name' variant='outlined' name="lastName" value={lastName} onChange={e => {handleOnChange(e); handleChange('lastName', e)}}/>
                    {errors.lastName && dirty.lastName && (
                        <Typography style={{marginTop: '0', color: 'red', fontWeight: '200'}}>{errors.lastName}</Typography>
                    )}
                    {
                        !disabled ? (
                        errors.firstName || errors.lastName ? (
                            <Button className="disabledBtn" disabled type='submit'>{activeStep === steps.length - 1 ? "Finish" : "Next"}</Button>
                        ): (
                            <Button className="nextBtn" type='submit' onClick={handleNext}>{activeStep === steps.length - 1 ? "Finish" : "Next"}</Button>
                        )):(<></>)
                    }
      
            </div>
        </div>
    )
}

export default FormName