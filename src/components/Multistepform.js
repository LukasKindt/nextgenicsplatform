import React from 'react'
import {Stepper, Step, StepLabel} from "@material-ui/core";
import FormName from './FormName'
import FormPlatformName from './FormPlatformName'
import FormEmail from './FormEmail'
import FormPassword from './FormPassword'
import FormTask from './FormTask'
import { Component } from 'react';

class Multistepform extends Component {

        state = {
            activeStep: 0,
            email: '',
            firstName: '',
            lastName: '',
            //platformName: '',
            //password: '',
            //confirmPassword: '',
            task: ''
        }


    getSteps(){
        return ["EMAIL", "NAME", "TASK"];
    }

    handleNext = () => {
        //setTimeout(() => {
            this.setState({
            activeStep: this.state.activeStep + 1
        })//}, 500);

    }

    handlePrev = () => {
        this.setState({
            activeStep: this.state.activeStep - 1
        })
    }

    handleChange = (field, e) => {
        this.setState({
            [field]: e.target.value
        })
    }

    handleSubmit = () => {
        console.log("submit everything!")
    }
    
    steps = this.getSteps();
    
    getStepsContent(stepIndex){
        const {email, firstName, lastName, task} = this.state;
        const values = {email, firstName, lastName, task}
        console.log(values)
        switch(stepIndex){
            case 0: 
                return <div>
                    <FormEmail 
                    handleChange={this.handleChange}
                    formValues={values}
                    handleNext={this.handleNext}
                    activeStep={this.state.activeStep}
                    steps={this.steps}/>
                    {<FormName disabled
                    handleChange={this.handleChange}
                    formValues={values}
                    handlePrev={this.handlePrev}
                    handleNext={this.handleNext}
                    activeStep={this.state.activeStep}
                    steps={this.steps}/>}
                    </div>
            case 1:
                return <div>
                    {<FormEmail disabled
                    handleChange={this.handleChange}
                    formValues={values}
                    handleNext={this.handleNext}
                    activeStep={this.state.activeStep}
                    steps={this.steps}/>}
                    <FormName
                    handleChange={this.handleChange}
                    formValues={values}
                    handlePrev={this.handlePrev}
                    handleNext={this.handleNext}
                    activeStep={this.state.activeStep}
                    steps={this.steps}/>
                    {<FormTask disabled
                    handleChange={this.handleChange}
                    formValues={values}
                    handlePrev={this.handlePrev}
                    handleNext={this.handleNext}
                    activeStep={this.state.activeStep}
                    steps={this.steps}/>}
                    </div>
            case 2:
                return <div>
                    {<FormName disabled
                    handleChange={this.handleChange}
                    formValues={values}
                    handlePrev={this.handlePrev}
                    handleNext={this.handleNext}
                    activeStep={this.state.activeStep}
                    steps={this.steps}/>}
                    <FormTask
                    handleChange={this.handleChange}
                    formValues={values}
                    handlePrev={this.handlePrev}
                    handleNext={this.handleNext}
                    activeStep={this.state.activeStep}
                    steps={this.steps}/>
                    </div>
            default:
                return 'Something went wrong, please contact support!'
        }
    }

    render(){
        return (
            <div className='root'>
                <section className='stepForm'>
                <Stepper activeStep={this.state.activeStep} alternativeLabel>
                    {this.steps.map(label => (
                        <Step key={label}>
                            <StepLabel>
                                {label}
                            </StepLabel>
                        </Step>
                    ))}
                    </Stepper>
                <>
                    {this.state.activeStep === this.steps.length ? (
                        <>
                        "You have succesfully completed the registration!"
                        {this.handleSubmit()}
                        </>
                        ) : (
                        <>
                            {this.getStepsContent(this.state.activeStep)}
                        </>
                    )}
                </>
                </section>
            </div>
        )
    }
}

export default Multistepform
