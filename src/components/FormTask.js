import React from 'react'
import useForm from './useForm'
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Button, TextField} from '@material-ui/core';
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
    },
})

export const FormEmail = ({activeStep, steps, handleNext, handleChange, formValues, disabled, handlePrev}) => {
    const stateSchema = {
        task: {value: formValues.task, error: ""}
    }

    const stateValidatorSchema = {
        task: {
            required: true, 
            validator: {
                func: value => /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(value),
                error: 'Please enter a valid task!'
            }
        }
    }

    const {values, errors, dirty, handleOnChange} = useForm(stateSchema, stateValidatorSchema)

    const {task} = values; 

    const classes = useStyles();

    return (
        <div className="mainContainer" style={disabled ? {pointerEvents: "none", opacity: "0.4"} : {}}>
            {console.log(formValues.task)}
            <Typography variant='h5' style={{color: '#999', textAlign: "center"}}>What is your task?</Typography>
            <div className={classes.formContainer}>
            {!disabled? (
            <Button className='backBtn' onClick={handlePrev}>Back</Button>
                ):(<></>)}
            <div className='radioButtons'>

                <input type='radio' id='management' name='task' value='management' onChange={e => {handleChange('task', e)}}></input>
                <label for="management">Management</label>
                
                <input type='radio' id='creative' name='task' value='creative' onChange={e => {handleChange('task', e)}}></input>
                <label for="creative">Creative</label>

                <input type='radio' id='sales' name='task' value='sales' onChange={e => {handleChange('task', e)}}></input>
                <label for="sales">Sales</label>

                <input type='radio' id='marketing' name='task' value='marketing' onChange={e => {handleChange('task', e)}}></input>
                <label for="marketing">Marketing</label>
            </div>
                    {errors.task && dirty.task && (
                        <Typography style={{marginTop: '0', color: 'red', fontWeight: '200'}}>{errors.task}</Typography>
                    )}
                    {
                        !disabled ? (
                        
                        !formValues.task? (
                            <Button className='disabledBtn' disabled type='submit'>{activeStep === steps.length - 1 ? "Finish" : "Next"}</Button>
                        ): (
                            <Button className='nextBtn' type='submit' onClick={handleNext}>{activeStep === steps.length - 1 ? "Finish" : "Next"}</Button>
                        )) : (<></>)
                    }
              
            </div>
        </div>
    )
}

export default FormEmail