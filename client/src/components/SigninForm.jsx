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
                    navigate('/categories', {replace: true});
                }
            }).catch(error => {
                if (error.response) {
                    setError(error.response.data.error);
                }
            });
    };



    return(
        <div className="p-10 w-5/12 2xl:w-4/12 min-w-max h-fit mx-auto text-primary">
            <div >
                <p className="text-center text-2xl  2xl:text-4xl " >Sign in to your account</p>
                
                <p className="text-left text-lg text-red-500 pt-3 pl-10 w-full h-10">{error}</p>

                <form className="pl-10 pr-10 pb-10 gap-10 text-lg 2xl:text-2xl" >
                    <div className="flex flex-col text-left  mt-3 mb-3  2xl:mt-5 2xl:mb-5" >
                        <p>E-mail</p>
                        <input
                        type="email"
                        className="min-w-96 border border-primary text-base 2xl:text-lg mt-1 2xl:mt-3 p-2 2xl:p-3"
                        id="email"
                        placeholder="Enter email here"
                        value={email}
                        onChange={(e) => {setEmail(e.target.value); setError('');} }
                        />
                    </div>
                    <div className="flex flex-col text-left  mt-3 mb-3  2xl:mt-5 2xl:mb-5">
                        <p>Password</p>
                        <input
                        className="min-w-96 border border-primary text-base 2xl:text-lg mt-1 2xl:mt-3 p-2 2xl:p-3"
                        type="password"
                        id="password"
                        placeholder="Enter password here"
                        value={password}
                        onChange={(e) => {setPassword(e.target.value); setError('');} }
                        />
                    </div>

                    <div className="flex flex-row justify-between min-w-fit">
                        <div className='flex flex-col text-xs 2xl:text-base  w-fit mr-5 h-fit text-sm underline underline-offset-1 '>
                            <Link to="/reset-password">Reset your password</Link>
                            <Link to="/register">Don't have an account?</Link>
                        </div>
                        <BlueBtn name='Sign in' func={handleSubmit} />
                    </div>                    
                </form>
            </div>
        </div>
    )
}

