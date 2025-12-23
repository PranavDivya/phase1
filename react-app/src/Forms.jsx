import React, {Component} from "react";
import Button from '@mui/material/Button';

export default class Forms extends Component{
    constructor(props){
        super(props);

        this.state = {
            userName: '',
            topic: 'react',
            password: '',
            error: {}
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    // handleTopicChange = event => {
    //     this.setState({
    //         topic: event.target.value
    //     })
    // }

    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        })
    }

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        })
    }

    validateForm = event =>{
        let error = {};
        let isValid = true;
        if(!this.state.userName){
            isValid = false;
            error['userName'] = "Username cannot be empty";
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailPattern.test(this.state.email)){
            isValid = false;
            error['email'] = "Invalid email"
        }
        if(this.state.password.length < 6){
            isValid = false;
            error['password'] = "Password must have atleast 6 characters"
        }
        this.setState({error});
        return isValid;

    }
    
    handleSubmit = event => {
        if(this.validateForm()){
            alert("Submitted successfully")
        }
        event.preventDefault()
    }

    render(){
        const {userName, email, password, error} = this.state
        return(
            <div className="formbox">
                {/* <Typography>Form</Typography> */}
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Login</legend>
                        <div>
                            <label htmlFor="userName">Username: </label>
                            <input type="text" value={userName} id="userName" onChange={this.handleUsernameChange}/>
                            {error.userName && <p style={{color: 'red'}}>{error.userName}</p>}
                        </div>
                        {/* <div>
                            <label htmlFor="topic">Topic: </label>
                            <select id="topic" value={topic} onChange={this.handleTopicChange}>
                                <option value="react">React</option>
                                <option value="angular">Angular</option>
                                <option value="vue">Vue</option>
                            </select>
                        </div> */}
                        <div>
                            <label htmlFor="email">Email: </label>
                            <input type="email" id="email" value={email} onChange={this.handleEmailChange}/>
                            {error.email && <p style={{color: 'red'}}>{error.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="password">Password: </label>
                            <input type="password" id="password" value={password} onChange={this.handlePasswordChange}/>
                            {error.password && <p style={{color: 'red'}}>{error.password}</p>}
                        </div>
                    </fieldset>
                    <Button variant="outlined" type="submit">Submit</Button>
                    {/* <button type="submit">Submit</button> */}
                </form>
            </div>
        )
    }
}