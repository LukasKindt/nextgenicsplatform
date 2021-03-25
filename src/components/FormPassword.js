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

export const FormPassword = ({activeStep, steps, handleNext, handlePrev, handleChange, formValues, disabled}) => {
    const stateSchema = {
        password: {value: formValues.password, error: ""},
        confirmPassword: {value: formValues.confirmPassword, error: ""},
    }

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

    const handleClickShowPassword = () => {
        setShowPasswordValue({
            showPassword: !showPasswordValue.showPassword
        })
    }

    const handleClickShowConfirmPassword = () => {
        setShowConfirmPasswordValue({
            showConfirmPassword: !showConfirmPasswordValue.showConfirmPassword
        })
    }

    const {password, confirmPassword} = values; 

    const classes = useStyles();

    return (
        <div className="mainContainer" style={disabled ? {pointerEvents: "none", opacity: "0.4"} : {}}>
            <Typography variant='h5' style={{color: '#999', textAlign: "center"}}>Please select a strong password!</Typography>
            <div className={classes.formContainer}>
            {!disabled? (
            <Button className={classes.btn} onClick={handlePrev}>Back</Button>
                ):(<></>)}
           
                    <FormControl className={classes.inputField} variant='outlined'>
                        <InputLabel>Password</InputLabel>
                        <OutlinedInput labelWidth={70} name='password' value={password} onChange={e => {handleOnChange(e); handleChange('password', e)}} type={showPasswordValue.showPassword ? "text" : "password"} endAdornment={
                            <InputAdornment position="end">
                                <IconButton edge="end" onClick={handleClickShowPassword}>
                                    {showPasswordValue.showPassword ? <Visibility/> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        } />
                    </FormControl>
                    {errors.password && dirty.password && (
                        <Typography style={{marginTop: '0', color: 'red', fontWeight: '200'}}>{errors.password}</Typography>
                    )}
                    <FormControl className={classes.inputField} variant='outlined' name='confirmPassword' >
                        <InputLabel>Confirm Password</InputLabel>
                        <OutlinedInput labelWidth={135} name='confirmPassword' value={confirmPassword} onChange={e => {handleOnChange(e); handleChange('confirmPassword', e)}}  type={showConfirmPasswordValue.showConfirmPassword ? "text" : "password"} endAdornment={
                            <InputAdornment position="end">
                                <IconButton edge="end" onClick={handleClickShowConfirmPassword}>
                                    {showConfirmPasswordValue.showConfirmPassword ? <Visibility/> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        } />
                    {confirmPassword !== password ? (
                        <Typography style={{color: "red"}}>Passwords do not match!</Typography>
                    ): null}
                    </FormControl>
                    {
                        !disabled ? (
                        errors.password || errors.confirmPassword || confirmPassword !== password ? (
                            <Button className={classes.btn} variant='contained' disabled type='submit' endIcon={<BlockSharpIcon />}>{activeStep === steps.length - 1 ? "Finish" : "Next"}</Button>
                        ): (
                            <Button className={classes.btn} variant='contained' type='submit' onClick={handleNext} endIcon={<SendSharpIcon />}>{activeStep === steps.length - 1 ? "Finish" : "Next"}</Button>
                        )):(<></>)
                    }
               
            </div>
        </div>
    )
}

export default FormPassword