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

export const FormLastName = ({activeStep, steps, handleNext, handlePrev, handleChange, formValues, disabled, handleOnClick}) => {
    const stateSchema = {
        lastName: {value: formValues.lastName, error: ""}
    }

    const step = 2;
    const shown = activeStep > step;

    const stateValidatorSchema = {
        lastName: {
            required: true, 
            validator: {
                func: value => /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/.test(value),
                error: 'Last name must be more than 3 character!'
            }
        }
    }

    const {values, errors, dirty, handleOnChange} = useForm(stateSchema, stateValidatorSchema)

    const {lastName} = values; 

    const classes = useStyles();

        
        const onKeyDownHandler = e => {
            if (e.keyCode === 13) {
              if (!errors.lastName){
                  handleNext()
              }
            }
          };

    return (
        <div className="mainContainer" onClick={e => {handleOnClick(step)}} style={disabled ? (shown ? ({ opacity: "0.2"}): ({opacity: "0"})) : {}}>
            <Typography variant='h5' style={{color: '#999', textAlign: "center"}}>{"Welcome " + formValues.firstName + "... What is your last name?"}</Typography>
            <div className={classes.formContainer}>
                {/*!disabled? (
            <Button className="backBtn" onClick={handlePrev}>Back</Button>
                ):(<></>)*/}
                {disabled ? (
                    <TextField disabled className={classes.inputField} label='Last Name' variant='outlined' name="lastName" value={lastName} onChange={e => {handleOnChange(e); handleChange('lastName', e)}} onKeyDown={onKeyDownHandler}/>
                ):(
                    <TextField className='onboardingField' className={classes.inputField} label='Last Name' variant='outlined' name="lastName" value={lastName} onChange={e => {handleOnChange(e); handleChange('lastName', e)}} onKeyDown={onKeyDownHandler}/>
                )}
                    {errors.lastName && dirty.lastName && (
                        <Typography style={{marginTop: '0', color: 'red', fontWeight: '200'}}>{errors.lastName}</Typography>
                    )}
                    {
                        !disabled ? (
                        errors.lastName ? (
                            <Button className="disabledBtn" disabled type='submit'>{activeStep === steps.length - 1 ? "Finish" : "Next"}</Button>
                        ): (
                            <Button className="nextBtn" type='submit' onClick={handleNext}>{activeStep === steps.length - 1 ? "Finish" : "Next"}</Button>
                        )):null
                    }
      
            </div>
        </div>
    )
}

export default FormLastName