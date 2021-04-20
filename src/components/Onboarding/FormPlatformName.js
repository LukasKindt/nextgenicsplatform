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
        width: '28.125rem',
        height: 'auto',
        padding: '2rem',
    },
    inputField: {
        width: '100%',
        marginBottom: '1rem'
    },
    btn: {
        width: '100%',
        height: '3rem',
        background: 'red',
        color: '#fff',
        marginBottom: '1rem',
        '&:hover': {
            color: 'red',
            opacity: '.7',
            transition: '.3s ease-in-out'
        }
    },
    disabledBtn: {
        background: "rgba(0,0,0,0.38)",
        width: "100%",
        height: '3rem'
    }
})

export const FormPlatformName = ({activeStep, steps, handleNext, handlePrev, handleChange, formValues, disabled}) => {
    const stateSchema = {
        platformName: {value: formValues.platformName, error: ""}
    }

    const stateValidatorSchema = {
        platformName: {
            required: true, 
            validator: {
                func: value => /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/.test(value),
                error: 'Platform name must be more than 3 characters!'
            }
        }
    }

    const {values, errors, dirty, handleOnChange} = useForm(stateSchema, stateValidatorSchema)

    const {platformName} = values; 

    const classes = useStyles();

    return (
        <div className="mainContainer" style={disabled ? {pointerEvents: "none", opacity: "0.4"} : {}}>
            <Typography variant='h5' style={{color: '#999', textAlign: "center"}}>Hi {formValues.firstName}, what name would you like to use on the platform?</Typography>
            <div className={classes.formContainer}>
            {!disabled? (
            <Button className={classes.btn} onClick={handlePrev}>Back</Button>
                ):(<></>)}
        
                    <TextField className={classes.inputField} label='Platform Name' variant='outlined' name="platformName" value={platformName} onChange={e => {handleOnChange(e); handleChange('platformName', e)}}/>
                    {errors.platformName && dirty.platformName && (
                        <Typography style={{marginTop: '0', color: 'red', fontWeight: '200'}}>{errors.platformName}</Typography>
                    )}
                    {
                        !disabled ? (
                        errors.platformName ? (
                            <Button className={classes.btn} variant='contained' disabled type='submit' endIcon={<BlockSharpIcon />}>{activeStep === steps.length - 1 ? "Finish" : "Next"}</Button>
                        ): (
                            <Button className={classes.btn} variant='contained' type='submit' onClick={handleNext} endIcon={<SendSharpIcon />}>{activeStep === steps.length - 1 ? "Finish" : "Next"}</Button>
                        )):(<></>)
                    }
              
            </div>
        </div>
    )
}

export default FormPlatformName