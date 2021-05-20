import React from 'react'
import useForm from '../useForm'
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

export const FormFirstName = ({activeStep, steps, handleNext, handlePrev, handleChange, formValues, disabled, handleOnClick}) => {
    const stateSchema = {
        firstName: {value: formValues.firstName, error: ""}
    }

    const step = 1;
    const shown = activeStep > step;

    const stateValidatorSchema = {
        firstName: {
            required: true, 
            validator: {
                func: value => /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/.test(value),
                error: 'First name must be more than 1 character!'
            }
        }
    }

    const {values, errors, dirty, handleOnChange} = useForm(stateSchema, stateValidatorSchema)

    const {firstName} = values; 

    const classes = useStyles();

        
        const onKeyDownHandler = e => {
            if (e.keyCode === 13) {
              if (!errors.firstName){
                  handleNext()
              }
            }
          };

    return (
        <div className="mainContainer" onClick={e => {handleOnClick(step)}} style={disabled ? (shown ? ({ opacity: "0.2"}): ({opacity: "0"})) : {}}>
            <Typography variant='h5' style={{color: '#999', textAlign: "center"}}>{formValues.email + "@" + formValues.domain + ", huh? Could we have your first name next?"}</Typography>
            <div className={classes.formContainer}>
                {/*!disabled? (
            <Button className="backBtn" onClick={handlePrev}>Back</Button>
                ):(<></>)*/}
                {disabled ? (
                <TextField disabled className={classes.inputField} label='First Name' variant='outlined' name="firstName" value={firstName} onChange={e => {handleOnChange(e); handleChange('firstName', e)}}  onKeyDown={onKeyDownHandler}/>
                ):(
                <TextField className='onboardingField' className={classes.inputField} autofocus label='First Name' variant='outlined' name="firstName" value={firstName} onChange={e => {handleOnChange(e); handleChange('firstName', e)}}  onKeyDown={onKeyDownHandler}/>
                )}
                    {errors.firstName && dirty.firstName && (
                        <Typography style={{marginTop: '0', color: 'red', fontWeight: '200'}}>{errors.firstName}</Typography>
                    )}
                    {
                        !disabled ? (
                        errors.firstName ? (
                            <Button className="disabledBtn" disabled type='submit'>{activeStep === steps.length - 1 ? "Finish" : "Next"}</Button>
                        ): (
                            <Button className="nextBtn" type='submit' onClick={handleNext}>{activeStep === steps.length - 1 ? "Finish" : "Next"}</Button>
                        )):null
                    }
      
            </div>
        </div>
    )
}

export default FormFirstName