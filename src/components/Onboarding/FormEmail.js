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
        height: 'auto',
        padding: '2rem',
    },
    inputField: {
        width: '50%',
        marginBottom: '1rem'
    }
})

export const FormEmail = ({activeStep, steps, handleNext, handleChange, formValues, disabled, handleOnClick}) => {
    const stateSchema = {
        email: {value: formValues.email, error: ""},
        domain: {value: formValues.domain, error: ""}
    }
    
    const step = 0;
    const shown = activeStep > step;

    const stateValidatorSchema = {
        email: {
            required: true, 
            validator: {
                func: value => /^([a-zA-Z0-9_\-\.]+)$/.test(value),
                error: 'Invalid email format!'
            }
        }
    }

    const {values, errors, dirty, handleOnChange} = useForm(stateSchema, stateValidatorSchema)

    const {email, domain} = values; 

    const classes = useStyles();

    const onKeyDownHandler = e => {
        if (e.keyCode === 13) {
          if (!errors.email){
              handleNext()
          }
        }
      };

    return (
        <div className="mainContainer formEmail" onClick={e => {handleOnClick(step)}} style={disabled ? (shown ? ({ opacity: "0.2"}): ({opacity: "0"})) : {}}>
            <Typography variant='h5' style={{color: '#999', textAlign: "center"}}>{"Can you confirm we got your email right?"}</Typography>
            <div className={classes.formContainer}>
                <section class="emailinput">
                    {disabled ? (<TextField className={classes.inputField} label='Email' variant='outlined' name="email" value={email} onChange={e => {handleOnChange(e); handleChange('email', e)}} onKeyDown={onKeyDownHandler} disabled />):
                        (<TextField className='onboardingField' autoFocus className={classes.inputField} label='Email' variant='outlined' name="email" value={email} onChange={e => {handleOnChange(e); handleChange('email', e)}} onKeyDown={onKeyDownHandler} />)}
                        <p class="domain">@{domain}</p>
                    </section>
                    
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