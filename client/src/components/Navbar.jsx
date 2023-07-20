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
    <div className="self-start w-content pl-5 pt-5 pr-5 justify-end h-full flex flex-col">
      <Link
        className="w-full pt-16"
        to={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {name}
      </Link>
      <div
        className={`w-full h-1 bg-slate-100 ${
          isHovered ? "block" : "hidden"
        }`}
      ></div>
    </div>
  );
}

const links = [
    {name: 'HOME', link:'/'},
    {name: 'PRODUCTS', link:'/products'},
    {name: 'ABOUT', link:'/about'},
    {name: 'CONTACT', link:'/contact'},
    {name: 'SIGN IN', link:'/signin'},
    {name: 'DASHBOARD', link:'/dashboard'},
]


export default function Navbar() {
    return(
        <div className="flex text-lg text-bold gap-10 justify-center font-sans text-zinc-50 bg-blue-950 h-32 w-full" >
            <div className="relative flex flex-row min-w-fit w-6/12 justify-between">
                <div className="w-40 h-32 bg-slate-50 p-3">
                  <img src={logo} className="w-full h-full brightness-100" alt="logo" />
                </div>
                {links.map((item) => <NavItem name={item.name} link={item.link}/>)}
            </div>
        </div>
    );
}
