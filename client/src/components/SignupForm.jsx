import React, { useState } from "react";
import BlueBtn from './BlueBtn' 

export default function SignupForm() {
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        console.log("Username:", email);
        console.log("Password:", password);

        setError('');
        setEmail("");
        setPassword("");
    };



    return(
        <div className="p-10 w-fit h-fit bg-slate-200 mx-auto">
            <div >
                <p className="text-center text-4xl text-slate-900" >Sign up for a new account</p>
                
                <p className="text-left text-lg text-red-500 pt-3 pl-10 w-full h-10">{error}</p>

                <form className="pl-10 pr-10 pb-10 gap-10" >
                    
                    <div className="flex flex-col text-left text-2xl text-slate-900 mt-5 mb-5" >
                        <label  htmlFor="firstName">First Name</label>
                        <input
                        type="text"
                        className="text-lg w-96 mt-3 p-3"
                        id="firstName"
                        placeholder="Enter your first name here"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col text-left text-2xl text-slate-900 mt-5 mb-5" >
                        <label  htmlFor="lastName">Last Name</label>
                        <input
                        type="text"
                        className="text-lg w-96 mt-3 p-3"
                        id="lastName"
                        placeholder="Enter your last name here"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col text-left text-2xl text-slate-900 mt-5 mb-5" >
                        <label  htmlFor="email">E-mail</label>
                        <input
                        type="email"
                        className="text-lg w-96 mt-3 p-3"
                        id="email"
                        placeholder="Enter email here"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col text-left text-2xl text-slate-900 mt-5 mb-5">
                        <label htmlFor="password">Password</label>
                        <input
                        className="text-lg w-96 mt-3 p-3"
                        type="password"
                        id="password"
                        placeholder="Enter password here"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-row justify-end">
                        
                        <BlueBtn name='Sign up' func={handleSubmit} />
                    </div>                    
                </form>
            </div>
        </div>
    )
}

