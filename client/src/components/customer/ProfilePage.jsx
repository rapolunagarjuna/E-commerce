import PersistentDrawerLeft from './SideBar';
import GreenBtn from '../GreenBtn';
import Cookies from 'js-cookie';

import jwt from 'jwt-decode'

export default function Profile() {
    const user = jwt(Cookies.get('token'));
    console.log(user);

    return (
        <PersistentDrawerLeft >
             <div className='w-full h-full min-h-screen'>
                <div className="flex flex-col m-auto justify-center items-center ">
                    <p className="mt-16 mb-16 text-center text-primary text-5xl">Your Profile</p>
                    <div className='grid gap-x-8 grid-cols-1 p-10 text-primary bg-gray-200 text-xl w-4/12 max-w-6/12 justify-center items-center shadow-xl gap-11'>  
                    <div className='flex flex-row justify-between'>
                        <p className='w-fit'>First Name</p>
                        <p className='text-right'>{user.firstName}</p>
                    </div>

                    <div className='flex flex-row justify-between'>
                        <p>Last Name</p>
                        <p className='text-right'>{user.lastName}</p>
                    </div>

                    <div className='flex flex-row justify-between'>
                        <p>Email</p>
                        <p className='text-right'>{user.email}</p>
                    </div>

                    <div className='flex flex-row justify-between'>
                        <p>Phone Number</p>
                        <p className='text-right'>{user.phoneNumber}</p>
                    </div>

                    <div className='flex flex-row justify-between'>
                        <p>Address</p>
                        {/* Render user's address here */}
                    </div>
                    <div className='flex w-full flex-row justify-end'>
                        <GreenBtn name="Save" />
                    </div>
                    </div>                   
                </div>
            </div>
        </ PersistentDrawerLeft>
    )
}