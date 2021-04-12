import React from 'react'
import {Stepper, Step, StepLabel} from "@material-ui/core";
import FormName from './FormName'
import FormPlatformName from './FormPlatformName'
import FormEmail from './FormEmail'
import FormPassword from './FormPassword'
import FormTask from './FormTask'
import FormTerms from './FormTerms'
import { Component } from 'react';

class Multistepform extends Component {

        state = {
            activeStep: 0,
            email: '',
            firstName: '',
            lastName: '',
            //platformName: '',
            password: '',
            confirmPassword: '',
            task: '',
            terms: false,
            cookies: false
        }


    getSteps(){
        return ["EMAIL", "NAME", "PASSWORD", "TASK", "TERMS"];
    }

    handleNext = () => {
        //setTimeout(() => {
            this.setState({
            activeStep: this.state.activeStep + 1
        })//}, 500);

        const element = document.getElementById('stepFormUnderStepper');
        element.scrollBy({
            top: 232,
            left: 0,
            behavior: 'smooth'
        });
    }

    handlePrev = () => {
        this.setState({
            activeStep: this.state.activeStep - 1
        })

        const element = document.getElementById('stepFormUnderStepper');
        element.scrollBy({
            top: -232,
            left: 0,
            behavior: 'smooth'
        });
    }

    handleChange = (field, e) => {
        this.setState({
            [field]: e.target.value
        })
    }

    handleSubmit = () => {
        console.log("submit everything!")
    }

    triggerTerms = () => (
        console.log(this.state),
        this.setState({
            terms: !this.state.terms,
        }),console.log(this.state)
    )

    triggerCookies = () => (
        console.log(this.state),
        this.setState({
            cookies: !this.state.cookies,
        }),console.log(this.state)
    )
    
    steps = this.getSteps();
    
    getStepsContent(stepIndex){
        const {email, firstName, lastName, password, confirmPassword, task, terms, cookies} = this.state;
        const values = {email, firstName, lastName, password, confirmPassword, task, terms, cookies}
        console.log(values)
        return <div>
                    {stepIndex != 0 ? (
                        <FormEmail disabled
                        handleChange={this.handleChange}
                        formValues={values}
                        handleNext={this.handleNext}
                        activeStep={this.state.activeStep}
                        steps={this.steps}/>
                    ):(
                        <FormEmail
                        handleChange={this.handleChange}
                        formValues={values}
                        handleNext={this.handleNext}
                        activeStep={this.state.activeStep}
                        steps={this.steps}/>
                    )}

                    {stepIndex != 1 ? (
                        <FormName disabled
                        handleChange={this.handleChange}
                        formValues={values}
                        handlePrev={this.handlePrev}
                        handleNext={this.handleNext}
                        activeStep={this.state.activeStep}
                        steps={this.steps}/>
                    ):(
                        <FormName 
                        handleChange={this.handleChange}
                        formValues={values}
                        handlePrev={this.handlePrev}
                        handleNext={this.handleNext}
                        activeStep={this.state.activeStep}
                        steps={this.steps}/>
                    )}

                    {stepIndex != 2 ? (
                        <FormPassword disabled
                        handleChange={this.handleChange}
                        formValues={values}
                        handlePrev={this.handlePrev}
                        handleNext={this.handleNext}
                        activeStep={this.state.activeStep}
                        steps={this.steps}/>
                    ):(
                        <FormPassword
                        handleChange={this.handleChange}
                        formValues={values}
                        handlePrev={this.handlePrev}
                        handleNext={this.handleNext}
                        activeStep={this.state.activeStep}
                        steps={this.steps}/>
                    )}

                    {stepIndex != 3 ? (
                        <FormTask disabled
                        handleChange={this.handleChange}
                        formValues={values}
                        handlePrev={this.handlePrev}
                        handleNext={this.handleNext}
                        activeStep={this.state.activeStep}
                        steps={this.steps}/>
                    ):(
                        <FormTask
                        handleChange={this.handleChange}
                        formValues={values}
                        handlePrev={this.handlePrev}
                        handleNext={this.handleNext}
                        activeStep={this.state.activeStep}
                        steps={this.steps}/>
                    )}
                    
                    {stepIndex != 4 ? (
                        <FormTerms disabled
                        handleChange={this.handleChange}
                        formValues={values}
                        handlePrev={this.handlePrev}
                        handleNext={this.handleNext}
                        triggerCookies={this.triggerCookies}
                        triggerTerms={this.triggerTerms}
                        activeStep={this.state.activeStep}
                        steps={this.steps}/>
                    ):(
                        <FormTerms
                        handleChange={this.handleChange}
                        formValues={values}
                        handlePrev={this.handlePrev}
                        handleNext={this.handleNext}
                        triggerCookies={this.triggerCookies}
                        triggerTerms={this.triggerTerms}
                        activeStep={this.state.activeStep}
                        steps={this.steps}/>
                    )}
                </div>
    }

    render(){
        return (
            <div className='root'>
                <section className='stepForm'>
                {/*<Stepper activeStep={this.state.activeStep} alternativeLabel>
                    {this.steps.map(label => (
                        <Step key={label}>
                            <StepLabel>
                                {label}
                            </StepLabel>
                        </Step>
                    ))}
                    </Stepper>*/}
                <article className='stepFormUnderStepper' id='stepFormUnderStepper'>
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
                </article>
                </section>
            </div>
        )
    }
}

export default Multistepform
