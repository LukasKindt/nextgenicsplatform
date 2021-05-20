import React from 'react'
import useForm from '../useForm'
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
        width: '100%',
        marginBottom: '1rem'
    }
})

export const FormTerms = ({activeStep, steps, handleNext, handlePrev, formValues, disabled, handleChange, triggerTerms, triggerCookies, handleOnClick}) => {

    const step = 6;
    const shown = activeStep > step;

    const stateSchema = {
    }

    const classes = useStyles();

    return (
        <div className="mainContainer formTerms" onClick={e => {handleOnClick(step)}} style={disabled ? (shown ? ({ opacity: "0.2"}): ({opacity: "0"})) : {}}>
            <Typography variant='h5' style={{color: '#999', textAlign: "center"}}>{"Please tick the following boxes to show you accept them"}</Typography>
            <div className={classes.formContainer}>
            {/*!disabled? (
            <Button className="backBtn" onClick={handlePrev}>Back</Button>
            ):null*/}
            <section className='checkBoxes'>
            <br/>
            <input type='checkbox' id='terms' name="terms" value='terms' onChange={triggerTerms}></input><label for="terms">Accept to our Terms &amp; Regulations and Privacy Policy</label>
            <br/>
            <input type='checkbox' id='cookies' name="cookies" value='cookies' onChange={triggerCookies}></input><label for="cookies">Accept cookies for a better experience</label>
            <br/>
            </section>
            
            {
                        !disabled ? (
                        
                        !formValues.terms || !formValues.cookies ? (
                            <Button className='disabledBtn' disabled type='submit'>{activeStep === steps.length - 1 ? "Finish" : "Next"}</Button>
                        ): (
                            <Button className='nextBtn' type='submit' onClick={handleNext}>{activeStep === steps.length - 1 ? "Finish" : "Next"}</Button>
                        )) : null
                    }
            </div>
        </div>
    )
}

export default FormTerms