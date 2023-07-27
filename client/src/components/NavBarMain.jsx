import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Cookies from 'js-cookie';

function NavItem({name , link}) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleSignOut = () => {
    Cookies.remove('token');
    navigate('/', {replace:true});
  };

  return (
    <div className="self-start w-content pl-5 pt-5 pr-5 justify-center items-center h-full flex flex-col">
      {link === '/signout' ?  
        <div className="m-auto w-full text-xl text-center hover:text-secondary" onClick={handleSignOut}>{name}</div>
        : <Link
            className="m-auto w-full text-xl text-center hover:text-secondary"
            to={link}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >{name}</Link>}
    </div>
  );
}

const links = [
    {name: 'Shop', link:'/shop'},
    {name: 'Cart', link:'/cart'},
    {name: 'Orders', link:'/orders'},
    {name: 'Profile', link:'/profile'},
    {name: 'Sign out', link:'/signout'},
]


export default function NavBarMain() {
    return(
        <div className="flex text-lg text-bold gap-10 justify-center text-primary  h-28 w-full" >
            <div className="relative flex flex-row min-w-fit w-6/12 justify-between">
                <div className="w-40 h-32 p-4">
                  <img src={logo} className="w-full h-full brightness-100" alt="logo" />
                </div>
                {links.map((item) => <NavItem name={item.name} link={item.link}/>)}
            </div>
        </div>
    );
}
