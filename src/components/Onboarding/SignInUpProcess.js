import React from 'react'
import { Component } from 'react';
import Multistepform from './Multistepform/Multistepform';
import FormHome from './FormHome';
import * as domainController from '../../controllers/domainController'
import * as clientController from '../../controllers/clientController'
import FormLogin from './FormLogin';
import LogInSignUp from './LogInSignUp';
import FormRegister from './FormRegister';
import ManagerTeamMember from './ManagerTeamMember';

class SignInUpProcess extends Component {

    state = {
        home: true,
        registerActive: false,
        email: '',
        password: ''
    }

    handleCheck = () => {
        domainController.checkDomainName(this.state.email.split('@')[1]).then(e => {
            if (e){

                clientController.checkUserName(this.state.email).then(f => {
                    if (f){
                        console.log('onboarding without creating new domain')
                    } else {
                        console.log('log in')
                        this.setState({
                            home:false,
                            register: false,
                        })
                    }
                })

            } else {
                console.log("create domain")
                this.setState({
                    home:false,
                    register: true,
                })
            }
        })
    }

    handleChange = (field, e) => {
        this.setState({
            [field]: e.target.value
        })
    }

    handleLogin = () => {
        const token = clientController.login(this.state.email, this.state.password)
        this.props.setToken(token)
    }

    render(){
        return (
            <div className='root'>
                {console.log(this.state.email)}
                <img src="../assets/logo.png" alt="Forcit" className="logo"/>
                <section className='homeLeft'>
                    <section class="leftText">
                        <img src="../assets/Circle.png" alt="Circle" className="homeLeftCircle"/>
                        <h1>Welcome to Forcit</h1>
                    </section>
                </section>
                <section className='homeRight'>

                {
                            this.state.home ? (
                                <section className="formHome"><FormHome handleCheck={this.handleCheck} handleChange={this.handleChange}/></section>
                            ):(
                                this.state.register ? (
                                    <section className="multiStepForm"><Multistepform email={this.state.email}/></section>
                                ):(
                                    <section className="formLogin"><FormLogin handleLogin={this.handleLogin} handleChange={this.handleChange}/></section>
                                )
                            )
                        }
                </section>
            </div>
        )
    }
}

export default SignInUpProcess
