import React from 'react';
import {useNavigate} from 'react-router';
import { MdDashboard, MdShoppingCart, MdPerson, MdExitToApp, MdReorder, MdArrowBackIos } from 'react-icons/md';
import { FaBars , FaBoxes} from'react-icons/fa';
import { IoIosListBox } from 'react-icons/io';
import Cookies from'js-cookie';
import Footer from './Footer';

const PersistentDrawerLeft = ({children}) => {
    const navigate = useNavigate();

    const menuItems = [
        { name: 'Dashboard', icon: <MdDashboard /> , func: () => {navigate('/dashboard', {replace:true})} },
        { name: 'Orders', icon: <IoIosListBox /> , func: () => {navigate('/dashboard/orders', {replace:true})} },
        { name: 'Cart', icon: <MdShoppingCart /> , func: () => {navigate('/dashboard/cart', {replace: true})} },
        { name: 'Profile', icon: <MdPerson /> , func: () => {navigate('/dashboard/profile', {replace: true})} },
        {name: 'Products', icon: <FaBoxes /> , func: () => {navigate('/dashboard/products', {replace: true})} },
        { name: 'Sign out', icon: <MdExitToApp /> , func: () => {Cookies.remove('token'); navigate('/', {replace: true})} },
    ];
    const backButton = <MdArrowBackIos />;
    const openButton = <div className='text-4xl hover:cursor-pointer '><FaBars /></div>;
    const [active, setActive] = React.useState(true);

    function toggleActive() {
        setActive(!active);
    }

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            {active ?
                <div className="w-80 flex flex-col bg-white divide-y divide-gray-200">
                    {/* Header */}
                    <div className="h-16 px-4 py-3 flex justify-end  bg-primary">
                        <h2 className="text-2xl font-semibold text-slate-100 hover:text-secondary hover:cursor-pointer" onClick={toggleActive}>{backButton}</h2>
                    </div>

                    {/* Menu */}
                    <div className="flex-1 overflow-y-auto  bg-primary">
                        {menuItems.map((item, index) => (
                            <div
                                key={item.name}
                                className="group flex mt-4 mb-4 px-10 py-3 items-center text-xl font-medium text-slate-100 hover:text-3xl hover:text-secondary hover:cursor-pointer"
                                onClick={item.func}
                            >
                                {item.icon}
                                <span className="ml-2">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                : null
            }

            {/* Main content */}
            <div className="flex flex-col w-full min-h-screen overflow-y-auto">
                {active ? <div className='w-full h-24'> </div> : <div className='h-24 p-5 bg-neutral-200 text-primary text-xl cursor-pointer' onClick={toggleActive}>{openButton}</div>}
                <div className="p-6 mb-auto bg-neutral-200">   
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default PersistentDrawerLeft;
