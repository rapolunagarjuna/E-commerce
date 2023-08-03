import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlueBtn from './BlueBtn' 
import axios from "axios";
import PhoneInput from 'react-phone-number-input/input'

export default function SignupForm() {
    
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setError('');

        axios.post('http://localhost:3000/api/users', {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.status === 200 || response.status === 204) {
                setError('');
                navigate('/dashboard', {replace: true});
            }
        })
        .catch(error => {
            if (error.response) {
                setError(error.response.data.error);
            }
        });

    };



    return(
        <div className="p-10 w-5/12 2xl:w-4/12 min-w-max h-fit text-primary mx-auto">
            <p className="text-center text-2xl 2xl:text-4xl " >Sign up for a new account</p>
                
            <p className="text-left text-sm 2xl:text-lg text-red-500 pt-3 pl-10 w-full h-6  2xl:h-10">{error}</p>

            <form className="pl-10 pr-10 pb-10 gap-10 w-full min-w-max text-lg 2xl:text-2xl" >
                
                <div className="flex flex-col text-left   mt-5 mb-5" >
                    <label  htmlFor="firstName">First Name</label>
                    <input
                    type="text"
                    className="min-w-96   mt-1  2xl:mt-3  p-2  2xl:p-3   border border-primary"
                    id="firstName"
                    placeholder="Enter your first name here"
                    value={firstName}
                    onChange={(e) => {setFirstName(e.target.value); setError('');}}
                    />
                </div>

                <div className="flex flex-col text-left mt-3 mb-3 2xl:mt-5 2xl:mb-5" >
                    <label  htmlFor="lastName">Last Name</label>
                    <input
                    type="text"
                    className="min-w-96 mt-1 2xl:mt-3 p-2 2xl:p-3 border border-primary"
                    id="lastName"
                    placeholder="Enter your last name here"
                    value={lastName}
                    onChange={(e) => {setLastName(e.target.value); setError('');}}
                    />
                </div>

                <div className="flex flex-col text-left   mt-3 mb-3 2xl:mt-5 2xl:mb-5" >
                    <label  htmlFor="phone-number">Phone Number</label>
                    <PhoneInput
                        defaultCountry="US" // Set the default country for formatting
                        value={phoneNumber}
                        onChange={setPhoneNumber}
                        placeholder="Enter your phone number here"
                        className="mt-1 2xl:mt-3 p-2 2xl:p-3 min-w-96 border border-primary" // Add styles for the phone input
                    />
                </div>

                <div className="flex flex-col text-left   mt-3 mb-3 2xl:mt-5 2xl:mb-5" >
                    <label  htmlFor="email">E-mail</label>
                    <input
                    type="email"
                    className=" min-w-96 mt-1 2xl:mt-3 p-2 2xl:p-3 border border-primary"
                    id="email"
                    placeholder="Enter email here"
                    value={email}
                    onChange={(e) => {setEmail(e.target.value); setError('');}}
                    />
                </div>

                <div className="flex flex-col text-left   mt-3 mb-3 2xl:mt-5 2xl:mb-5">
                    <label htmlFor="password">Password</label>
                    <input
                    className="mt-1 2xl:mt-3 p-2 2xl:p-3 min-w-96 border border-primary"
                    type="password"
                    id="password"
                    placeholder="Enter password here"
                    value={password}
                    onChange={(e) => {setPassword(e.target.value); setError('');}}
                    />
                </div>

                <div className="flex flex-row justify-end">
                    
                    <BlueBtn name='Sign up' func={handleSubmit} />
                </div>                    
            </form>
        </div>
    )
}

