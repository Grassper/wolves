import React,{useState} from "react";
import "./Sign-in.styles.scss";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";


const SignIn = () => {

    const [userCredentials,setUserCredentials] = useState({
        email:'',
        password:''
    })

    const { email, password } = userCredentials;

    const handleSubmit = async event =>{
        event.preventDefault();
    }

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setUserCredentials({...userCredentials,[name]:value})
    }

        return (
            <div className='sign-in'>
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput
                        type="email" 
                        name="email" 
                        value={email}
                        onChange={handleChange} 
                        label ="Email"
                        required/>
                    <FormInput 
                        type="password" 
                        name="password" 
                        value={password}  
                        onChange={handleChange}
                        label = "Password"
                        required/>
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                    </div>
                </form>
            </div>
        )
}

// const mapDispatchToProps = dispatch => ({
//     googleSignInStart: () => dispatch(googleSignInStart()),
//     emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
// });

export default connect(null,null)(SignIn);