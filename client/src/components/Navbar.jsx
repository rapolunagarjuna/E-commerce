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
    <div className="self-start w-content justify-center items-center h-full flex flex-col">
      <Link
        className="m-auto w-full text-base 2xl:text-xl text-center hover:text-secondary"
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
        <div className="flex text-lg h-16  2xl:h-24 text-bold gap-10 justify-center text-primary w-full" >
            <div className="flex flex-row h-full min-w-fit w-full relative justify-center">
                <div className="w-32 h-full p-4 ml-0">
                  <img src={logo} className="object-center  object-contain w-full h-full" alt="logo" />
                </div>
                <div className="relative flex flex-row min-w-fit w-6/12 justify-between items-center mx-auto">
                  {links.map((item) => <NavItem name={item.name} link={item.link}/>)}
                </div>
            </div>
        </div>
    );
}
