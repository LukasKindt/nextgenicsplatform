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

export const FormHome = ({handleCheck, handleChange}) => {
    const stateSchema = {
        email: {value: "", error: ""},
    }

    const stateValidatorSchema = {
        email: {
            required: true, 
            validator: {
                func: value => /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(value),
                error: 'Invalid email format!'
            }
        }
    }


    const {errors, dirty, handleOnChange} = useForm(stateSchema, stateValidatorSchema)

    const classes = useStyles();

    const onKeyDownHandler = e => {
        if (e.keyCode === 13) {
          if (!errors.email){
              handleCheck()
          }
        }
      };

    return (
        <div className="mainContainer">
            <Typography variant='h5' style={{color: '#999', textAlign: "center"}}>What is your Email?</Typography>
            <TextField autoFocus className={classes.inputField} label='Email' name="email" onChange={e => {handleOnChange(e); handleChange('email', e)}} onKeyDown={onKeyDownHandler} />
                    {errors.email && dirty.email && (
                        <Typography style={{color: "red", textAlign: "start", width: '80%'}}>{errors.email}</Typography>
                    )}
                    {
                        
                        errors.email ? (
                            <Button className='registerButtonDisabled' disabled type='submit'>Continue</Button>
                        ): (
                            <Button className='registerButton' type='submit' onClick={handleCheck}>Continue</Button>
                        )
                    }
        </div>
    )
}

export default FormHome