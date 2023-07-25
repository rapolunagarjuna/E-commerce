import React, { useState } from "react";
import { Link } from "react-router-dom";
import BlueBtn from './BlueBtn' 
import { useNavigate } from "react-router-dom";

export default function SigninForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })}).then(response => {
                if (response.status === 200) {
                    setError('');
                    navigate('/dashboard', {replace: true});
                }
            }).catch(error => {
                if (error.response) {
                    setError(error.response.data.error);
                }
            });
    };



    return(
        <div className="p-10 w-4/12 min-w-max h-fit mx-auto text-primary">
            <div >
                <p className="text-center text-4xl " >Sign in to your account</p>
                
                <p className="text-left text-lg text-red-500 pt-3 pl-10 w-full h-10">{error}</p>

                <form className="pl-10 pr-10 pb-10 gap-10" >
                    <div className="flex flex-col text-left text-2xl  mt-5 mb-5" >
                        <p>E-mail</p>
                        <input
                        type="email"
                        className="text-lg min-w-96 mt-3 p-3 border border-primary"
                        id="email"
                        placeholder="Enter email here"
                        value={email}
                        onChange={(e) => {setEmail(e.target.value); setError('');} }
                        />
                    </div>
                    <div className="flex flex-col text-left text-2xl  mt-5 mb-5">
                        <p>Password</p>
                        <input
                        className="text-lg min-w-96 border border-primary mt-3 p-3"
                        type="password"
                        id="password"
                        placeholder="Enter password here"
                        value={password}
                        onChange={(e) => {setPassword(e.target.value); setError('');} }
                        />
                    </div>

                    <div className="flex flex-row justify-between min-w-fit">
                        <div className='flex flex-col w-fit mr-5 h-fit text-sm underline underline-offset-1 '>
                            <Link className='text-sm underline underline-offset-1 ' to="/reset-password">Reset your password</Link>
                            <Link to="/register">Don't have an account?</Link>
                        </div>
                        <BlueBtn name='Sign in' func={handleSubmit} />
                    </div>                    
                </form>
            </div>
        </div>
    )
}

