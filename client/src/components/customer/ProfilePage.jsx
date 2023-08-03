import PersistentDrawerLeft from './SideBar';
import GreenBtn from '../GreenBtn';

export default function Profile() {
    return (
        <PersistentDrawerLeft >
             <div className='w-full h-full min-h-screen'>
                <div className="flex flex-col m-auto justify-center items-center ">
                    <p className="mt-16 mb-16 text-center text-primary text-5xl">Your Profile</p>
                    <div className='grid gap-x-8 grid-cols-1 p-10 text-primary bg-gray-200 text-xl w-fit justify-center items-center shadow-xl gap-11'>  
                        <p>First Name</p>
                        <p>Last Name</p>
                        <p>Email</p>
                        <p>Phone Number</p>
                        <p>Address</p>
                        <div className='flex w-full flex-row justify-end'>
                            <GreenBtn name="Save" />
                        </div>
                    </div>                   
                </div>
            </div>
        </ PersistentDrawerLeft>
    )
}