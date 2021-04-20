import React from 'react'
import {Stepper, Step, StepLabel} from "@material-ui/core";
import FormFirstName from './FormFirstName'
import FormLastName from './FormLastName'
import FormEmail from './FormEmail'
import FormPassword from './FormPassword'
import FormConfirmPassword from './FormConfirmPassword'
import FormTask from './FormTask'
import FormTerms from './FormTerms'
import { Component } from 'react';

//export const FormEmail = ({activeStep, steps, handleNext, handleChange, formValues, disabled, handlePrev}) => {
class Multistepform extends Component{

        state = {
            activeStep: 0,
            email: this.props.email.split("@")[0],
            domain: this.props.email.split("@")[1],
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
        return ["EMAIL", "FIRST NAME", "LAST NAME", "PASSWORD", "CONFIRM PASSWORD", "TASK", "TERMS"];
    }

    handleNext = () => {
            this.setState({
            activeStep: this.state.activeStep + 1
        })

        const element = document.getElementById('stepFormUnderStepper');
        element.scrollBy({
            top: 168,
            left: 0,
        });

        //var tabEvent = new KeyboardEvent({'keydown' : {'keyCode': 9, 'which': 9}});
        //document.dispatchEvent(tabEvent);

        /*var inputs = document.getElementsByClassName("onboardingField");
        var nextInput=inputs.get(inputs.index(this)+1);
        if (nextInput) {
            nextInput.focus();
         }*/
    }

    handlePrev = () => {
        this.setState({
            activeStep: this.state.activeStep - 1
        })

        const element = document.getElementById('stepFormUnderStepper');
        element.scrollBy({
            top: -168,
            left: 0,
           
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

    handleOnClick = (formpart) => {
        console.log(formpart)
        if (formpart < this.state.activeStep){
            const diff = this.state.activeStep - formpart
            const element = document.getElementById('stepFormUnderStepper');
            element.scrollBy({
                top: -168*diff,
                left: 0,
                behavior: 'smooth'
            });
            this.setState({
                activeStep: formpart
            })
        }
    }
    
    steps = this.getSteps();
    
    getStepsContent(stepIndex){
        console.log(this.props)
        const {email, firstName, lastName, password, confirmPassword, task, terms, cookies, domain} = this.state;
        const values = {email, firstName, lastName, password, confirmPassword, task, terms, cookies, domain}
        console.log(values)
        return <div>
                    {stepIndex != 0 ? (
                        <FormEmail disabled
                        handleChange={this.handleChange}
                        formValues={values}
                        handleNext={this.handleNext}
                        activeStep={this.state.activeStep}
                        steps={this.steps}
                        handleOnClick={this.handleOnClick} />
                    ):(
                        <FormEmail
                        handleChange={this.handleChange}
                        formValues={values}
                        handleNext={this.handleNext}
                        activeStep={this.state.activeStep}
                        steps={this.steps}
                        handleOnClick={this.handleOnClick}/>
                    )}

                    {stepIndex != 1 ? (
                        <FormFirstName disabled
                        handleChange={this.handleChange}
                        formValues={values}
                        handlePrev={this.handlePrev}
                        handleNext={this.handleNext}
                        activeStep={this.state.activeStep}
                        steps={this.steps}
                        handleOnClick={this.handleOnClick}/>
                    ):(
                        <FormFirstName 
                        handleChange={this.handleChange}
                        formValues={values}
                        handlePrev={this.handlePrev}
                        handleNext={this.handleNext}
                        activeStep={this.state.activeStep}
                        steps={this.steps}
                        handleOnClick={this.handleOnClick}/>
                    )}

                    {stepIndex != 2 ? (
                        <FormLastName disabled
                        handleChange={this.handleChange}
                        formValues={values}
                        handlePrev={this.handlePrev}
                        handleNext={this.handleNext}
                        activeStep={this.state.activeStep}
                        steps={this.steps}
                        handleOnClick={this.handleOnClick}/>
                    ):(
                        <FormLastName 
                        handleChange={this.handleChange}
                        formValues={values}
                        handlePrev={this.handlePrev}
                        handleNext={this.handleNext}
                        activeStep={this.state.activeStep}
                        steps={this.steps}
                        handleOnClick={this.handleOnClick}/>
                    )}

                    {stepIndex != 3 ? (
                        <FormPassword disabled
                        handleChange={this.handleChange}
                        formValues={values}
                        handlePrev={this.handlePrev}
                        handleNext={this.handleNext}
                        activeStep={this.state.activeStep}
                        steps={this.steps}
                        handleOnClick={this.handleOnClick}/>
                    ):(
                        <FormPassword
                        handleChange={this.handleChange}
                        formValues={values}
                        handlePrev={this.handlePrev}
                        handleNext={this.handleNext}
                        activeStep={this.state.activeStep}
                        steps={this.steps}
                        handleOnClick={this.handleOnClick}/>
                    )}

                    {stepIndex != 4? (
                        <FormConfirmPassword disabled
                        handleChange={this.handleChange}
                        formValues={values}
                        handlePrev={this.handlePrev}
                        handleNext={this.handleNext}
                        activeStep={this.state.activeStep}
                        steps={this.steps}
                        handleOnClick={this.handleOnClick}/>
                    ):(
                        <FormConfirmPassword
                        handleChange={this.handleChange}
                        formValues={values}
                        handlePrev={this.handlePrev}
                        handleNext={this.handleNext}
                        activeStep={this.state.activeStep}
                        steps={this.steps}
                        handleOnClick={this.handleOnClick}/>
                    )}

                    {stepIndex != 5 ? (
                        <FormTask disabled
                        handleChange={this.handleChange}
                        formValues={values}
                        handlePrev={this.handlePrev}
                        handleNext={this.handleNext}
                        activeStep={this.state.activeStep}
                        steps={this.steps}
                        handleOnClick={this.handleOnClick}/>
                    ):(
                        <FormTask
                        handleChange={this.handleChange}
                        formValues={values}
                        handlePrev={this.handlePrev}
                        handleNext={this.handleNext}
                        activeStep={this.state.activeStep}
                        steps={this.steps}
                        handleOnClick={this.handleOnClick}/>
                    )}
                    
                    {stepIndex != 6 ? (
                        <FormTerms disabled
                        handleChange={this.handleChange}
                        formValues={values}
                        handlePrev={this.handlePrev}
                        handleNext={this.handleNext}
                        triggerCookies={this.triggerCookies}
                        triggerTerms={this.triggerTerms}
                        activeStep={this.state.activeStep}
                        steps={this.steps}
                        handleOnClick={this.handleOnClick}/>
                    ):(
                        <FormTerms
                        handleChange={this.handleChange}
                        formValues={values}
                        handlePrev={this.handlePrev}
                        handleNext={this.handleNext}
                        triggerCookies={this.triggerCookies}
                        triggerTerms={this.triggerTerms}
                        activeStep={this.state.activeStep}
                        steps={this.steps}
                        handleOnClick={this.handleOnClick}/>
                    )}
                </div>
    }

    render(){
        return (
            <div className='root'>
                <section className='stepForm'>
                {/*<Stepper className='stepper' activeStep={this.state.activeStep} alternativeLabel>
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
