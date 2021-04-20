import React, {useState} from 'react'
import useForm from './useForm'
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Button, OutlinedInput, FormControl, InputLabel, InputAdornment, IconButton} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
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

export const FormConfirmPassword = ({activeStep, steps, handleNext, handlePrev, handleChange, formValues, disabled, handleOnClick}) => {
    const stateSchema = {
        confirmPassword: {value: formValues.confirmPassword, error: ""},
    }

    const step = 4;
    const shown = activeStep > step;

    const stateValidatorSchema = {
        password: {
            required: true, 
            validator: {
                func: value => /^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(value),
                error: "Your password needs at least 6 characters and at least one special character '@,$,!,%,*,#,?,&'"
            }
        }
    }

    const {values, errors, dirty, handleOnChange} = useForm(stateSchema, stateValidatorSchema)

    const [showPasswordValue, setShowPasswordValue] = useState({
        showPassword: false
    })

    const [showConfirmPasswordValue, setShowConfirmPasswordValue] = useState({
        showConfirmPassword: false
    })

    const handleClickShowConfirmPassword = () => {
        setShowConfirmPasswordValue({
            showConfirmPassword: !showConfirmPasswordValue.showConfirmPassword
        })
    }

    const {password, confirmPassword} = values; 

    const classes = useStyles();

    const onKeyDownHandler = e => {
        if (e.keyCode === 13) {
          if (confirmPassword == formValues.password){
              handleNext()
          }
        }
      };

    return (
        <div className="mainContainer formPassword" onClick={e => {handleOnClick(step)}} style={disabled ? (shown ? ({ opacity: "0.2"}): ({opacity: "0"})) : {}}>
            <Typography variant='h5' style={{color: '#999', textAlign: "center"}}>{"Could you repeat that? I promise it'll stay secret!"}</Typography>
            <div className={classes.formContainer}>
            {/*!disabled? (
            <Button className='backBtn' onClick={handlePrev}>Back</Button>
            ):null*/}
           
                    <FormControl className={classes.inputField} variant='outlined' name='confirmPassword' >
                        <InputLabel>Confirm Password</InputLabel>
                        {disabled ? (
                        <OutlinedInput labelWidth={135} name='confirmPassword' value={confirmPassword} onChange={e => {handleOnChange(e); handleChange('confirmPassword', e)}} onKeyDown={onKeyDownHandler} disabled  type={showConfirmPasswordValue.showConfirmPassword ? "text" : "password"}/>):
                        (<OutlinedInput className='onboardingField' labelWidth={135} name='confirmPassword' value={confirmPassword} onChange={e => {handleOnChange(e); handleChange('confirmPassword', e)}} onKeyDown={onKeyDownHandler}  type={showConfirmPasswordValue.showConfirmPassword ? "text" : "password"} endAdornment={
                            <InputAdornment position="end">
                                <IconButton edge="end" onClick={handleClickShowConfirmPassword}>
                                    {showConfirmPasswordValue.showConfirmPassword ? <Visibility/> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        } />)}
                    {/*confirmPassword !== formValues.password ? (
                        <Typography style={{color: "red"}}>Passwords do not match!</Typography>
                    ): null*/}
                    </FormControl>
                    {
                        !disabled ? (
                        confirmPassword !== formValues.password ? (
                            <Button className="disabledBtn" disabled type='submit'>{activeStep === steps.length - 1 ? "Finish" : "Next"}</Button>
                        ): (
                            <Button className="nextBtn" type='submit' onClick={handleNext}>{activeStep === steps.length - 1 ? "Finish" : "Next"}</Button>
                        )) : null
                    }
               
            </div>
        </div>
    )
}

export default FormConfirmPassword