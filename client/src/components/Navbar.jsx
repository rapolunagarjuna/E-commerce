import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/images/logo.png";

function NavItem({name , link}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="self-start w-content pl-5 pt-5 pr-5 justify-center items-center h-full flex flex-col">
      <Link
        className="m-auto w-full text-xl text-center hover:text-secondary"
        to={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {name}
      </Link>
    </div>
  );
}

const links = [
    {name: 'HOME', link:'/'},
    {name: 'PRODUCTS', link:'/products'},
    {name: 'ABOUT', link:'/about'},
    {name: 'CONTACT', link:'/contact'},
    {name: 'SIGN IN', link:'/signin'},
]


export default function Navbar() {
    return(
        <div className="flex text-lg text-bold gap-10 justify-center text-primary h-28 w-full" >
            <div className="flex flex-row min-w-fit w-full relative justify-center">
                <div className="w-40 h-32 p-4 ml-0">
                  <img src={logo} className="w-full h-full" alt="logo" />
                </div>
                <div className="relative flex flex-row min-w-fit w-6/12 justify-between mx-auto">
                  {links.map((item) => <NavItem name={item.name} link={item.link}/>)}
                </div>
            </div>
        </div>
    );
}
