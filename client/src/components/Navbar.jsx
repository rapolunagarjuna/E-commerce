import { Link } from "react-router-dom";
import { useState } from "react";

function NavItem({name , link}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="w-content pl-5 pt-5 pr-5 justify-end h-full flex flex-col">
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
    {name: 'PRODUCTS', link:'/'},
    {name: 'ABOUT US', link:'/'},
    {name: 'CONTACT', link:'/'},
    {name: 'SIGNIN', link:'/'},
]


export default function Navbar() {
    return(
        <div className="flex text-lg text-bold gap-10 justify-center font-sans text-zinc-50 bg-blue-950 h-32 w-full" >
            <div className="relative flex flex-row w-6/12 justify-between">
                <div className="w-40 h-32 bg-blue-500"></div>
                {links.map((item) => <NavItem name={item.name} link={item.link}/>)}
            </div>
        </div>
    );
}