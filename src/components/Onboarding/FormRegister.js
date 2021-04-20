import React, {useState} from 'react'
import useForm from './useForm'
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Button, TextField, OutlinedInput, FormControl, InputLabel, InputAdornment, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import 'react-intl-tel-input/dist/main.css'

const useStyles = makeStyles({
    formContainer: {
        position: 'relative',
        width: '28.125rem',
        height: 'auto',
        padding: '2rem',
    },
    inputField: {
        width: '80%',
        marginBottom: '1rem',
        backgroundColor: 'rgba(255,255,255,0.6)'
    }
})

export const FormRegister = ({handleContinue}) => {
    const stateSchema = {
        accountName: {value: "", error: ""},
        password: {value: "", error: ""},
        confirmPassword: {value: "", error: ""}
    }

    const stateValidatorSchema = {
        accountName: {
            required: true, 
            validator: {
                func: value => /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/.test(value),
                error: 'Account name must be more than 1 character!'
            }
        },
        password: {
            required: true, 
            validator: {
                func: value => /^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(value),
                error: "Your password needs at least 6 characters and at least one special character '@,$,!,%,*,#,?,&'"
            }
        }
    }

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


    const {values, errors, dirty, handleOnChange} = useForm(stateSchema, stateValidatorSchema)

    const {accountName, password, confirmPassword} = values; 

    const classes = useStyles();

    return (
        <div className="mainContainer">
            <Typography variant='h5' style={{color: '#999', textAlign: "center"}}>Create Your Account</Typography>
            <TextField className={classes.inputField} label='Name Account' name="accountName" value={accountName} onChange={e => {handleOnChange(e)}}/>
                    {errors.accountName && dirty.accountName && (
                        <Typography style={{color: "red", textAlign: "start", width: '80%'}}>{errors.accountName}</Typography>
                    )}
            <Typography variant='h5' style={{color: '#999'}}>Password</Typography>
            <FormControl className={classes.inputField} variant='outlined'>
                        <InputLabel>Password</InputLabel>
                        <OutlinedInput labelWidth={70} name='password' value={password} onChange={e => {handleOnChange(e)}} type={showPasswordValue.showPassword ? "text" : "password"} endAdornment={
                            <InputAdornment position="end">
                                <IconButton edge="end" onClick={handleClickShowPassword}>
                                    {showPasswordValue.showPassword ? <Visibility/> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        } />
                    </FormControl>
                    {errors.password && dirty.password && (
                        <Typography style={{color: "red", textAlign: "start", width: '80%'}}>{errors.password}</Typography>
                    )}
                    <Typography variant='h5' style={{color: '#999'}}>Confirm Password</Typography>
                    <FormControl className={classes.inputField} variant='outlined' name='confirmPassword' >
                        <InputLabel>Confirm Password</InputLabel>
                        <OutlinedInput labelWidth={135} name='confirmPassword' value={confirmPassword} onChange={e => {handleOnChange(e)}}  type={showConfirmPasswordValue.showConfirmPassword ? "text" : "password"} endAdornment={
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
                        
                        errors.accountName || errors.password || errors.confirmPassword || confirmPassword !== password ? (
                            <Button className='registerButtonDisabled' disabled type='submit'>Continue</Button>
                        ): (
                            <Button className='registerButton' type='submit' onClick={handleContinue}>Continue</Button>
                        )
                    }
        </div>
    )
}

export default FormRegister