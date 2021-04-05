import React,{useState} from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { connect } from "react-redux";

const SignUp = () => {

    const [userCredentials,setUserCredentials] = useState({
        displayName:"",
        email:"",
        password:"",
        confirmpassword:""
    })

    const {email,displayName,password, confirmpassword} = userCredentials;

    const handleSubmit = async event =>{
        event.preventDefault();
        if(password !== confirmpassword){
            alert("password's don't match");
            return;
        }
        // signUpStart({displayName,email,password});
    };

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setUserCredentials({...userCredentials,[name]:value});
    };   

        return (
            <div className='sign-up'>
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <FormInput 
                        type="text"
                        name="displayName"
                        label="Display Name"
                        value={displayName}
                        onChange={handleChange}
                        required/>
                    <FormInput 
                        type="email"
                        name="email"
                        label="Email"
                        value={email}
                        onChange={handleChange}
                        required/>
                    <FormInput 
                        type="password"
                        name="password"
                        label="Password"
                        value={password}
                        onChange={handleChange}
                        required/>
                    <FormInput 
                        type="password"
                        name="confirmpassword"
                        label="Confirm Password"
                        value={confirmpassword}
                        onChange={handleChange}
                        required/>
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
}

// const mapDispatchToProps = (dispatch) =>({
//     signUpStart: (creds) => dispatch(signUpStart(creds))
// })

export default connect(null,null)(SignUp);
