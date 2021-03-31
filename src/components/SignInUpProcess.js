import React from 'react'
import { Component } from 'react';
import Multistepform from './Multistepform';
import LogInSignUp from './LogInSignUp';
import FormRegister from './FormRegister';
import ManagerTeamMember from './ManagerTeamMember';

class SignInUpProcess extends Component {

    //signInSignUp              ->  everything false
    //formRegister              ->  formRegister: true
    //formLogin                 ->  formLogin: true
    //managerTeamMember         ->  formLogin, formRegister: true
    //multistepform (manager)   ->  formLogin, formRegister, manager: true
    //teamMemberForm            ->  formLogin, formRegister, teamMember: true
    state = {
        loginActive: true,
        registerActive: true,
        manager: true,
        teamMember: false
    }

    handleLogIn = () => {
        this.setState({
            loginActive: true,
            registerActive: false
        })
    }

    handleRegister = () => {
        this.setState({
            loginActive: false,
            registerActive: true
        })
    }

    handleContinue = () => {
        this.setState({
            loginActive: true,
            registerActive: true
        })
    }

    handleManager = () => {
        this.setState({
            manager: true,
            teamMember: false
        })
    }

    handleTeamMember = () => {
        this.setState({
            manager: false,
            teamMember: true
        })
    }

    render(){
        return (
            <div className='root'>
                {<img src="../assets/logo.png" alt="Forcit" className="logo"/>}
                <section className='homeLeft'>
                    <h1>Welcome to Forcit</h1>
                </section>
                <section className='homeRight'>

                {
                    this.state.registerActive && !this.state.loginActive ? (
                        <section className="formRegister"><FormRegister handleContinue={this.handleContinue}/></section>
                    ):(

                        this.state.loginActive && !this.state.registerActive ? (
                            <p>Login Form</p>
                            //<FormLogIn></FormLogIn>
                        ):(

                            this.state.loginActive && this.state.registerActive ? (
                                this.state.manager ? (
                                    <section class="multiStepForm"><Multistepform/></section>
                                    
                                ):(

                                    this.state.teamMember ? (
                                        <p>Team Member Form</p>
                                    ):(
                                        <section className="managerTeamMember">
                                        <ManagerTeamMember handleManager={this.handleManager} handleTeamMember={this.handleTeamMember}/>
                                        </section>
                                    )
                                )
                            ):(
                                <section className="logInSignUp">
                                <LogInSignUp
                                handleLogIn={this.handleLogIn}
                                handleRegister={this.handleRegister}
                                />
                            </section>
                            )
                        )
                    )
                }
                </section>
            </div>
        )
    }
}

export default SignInUpProcess