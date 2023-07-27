import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Cookies from 'js-cookie';
import dwnArrow from "../assets/images/down-arrow.png";

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


function Option({ options, onChange, setActive }) {
  return (
      <div className="absolute w-full bg-white flex flex-col text-xl z-20 shadow-xl border-primary">
          {options.map((option) => (
              <div
                  key={option.value}
                  className="p-3  hover:bg-secondary cursor-pointer"
                  onClick={() => {
                      onChange(option);
                      setActive(false);
                  }}
              >
                  {option.label}
              </div>
          ))}
      </div>
  );
}


function CustomSelect({ options, value, onChange}) {
  const [active, setActive] = useState(false);
  const node = useRef();
  const currentLabel = options.find((option) => option.value === value)?.label;

  const toggleDropdown = () => {
      setActive(!active);
  };

  const handleClick = (e) => {
      if (node.current.contains(e.target)) {
          // inside click
          return;
      }
      // outside click
      setActive(false);
  };

  useEffect(() => {
      // add when mounted
      document.addEventListener("mousedown", handleClick);
      // return function to be called when unmounted
      return () => {
          document.removeEventListener("mousedown", handleClick);
      };
  }, []);

  return (
      <div ref={node} className="w-full flex flex-col relative">
          <div className="justify-end text-primary  text-xl w-full h-min flex flex-row">
              <span className=" text-center w-full h-fit hover:text-secondary">{currentLabel}</span>
              <div className="justify-center items-center ml-3 h-7 w-10" onClick={toggleDropdown}>
                  <img src={ dwnArrow } className="h-full w-full object-contain object-center" />
              </div>
          </div>
          {active && <Option options={options} setActive={setActive} onChange={onChange} />}
      </div>
  );
}



function SelectNavItem({value , options}) {

  const navigate = useNavigate();
  const name = options.find((option) => option.value === value)?.label;

  const handleOnChange = (selectedOption) => {
    navigate(selectedOption.link);
};

  return(
    <div className="self-start w-content pl-5 pt-5 pr-5 justify-center items-center h-full flex flex-col">
      <CustomSelect options={options} value={value} onChange={handleOnChange}/>
    </div>
    
  )
}



const links = [
    {name: 'Cart', link:'/cart'},
    {name: 'Orders', link:'/orders'},
    {name: 'Profile', link:'/profile'},
    {name: 'Sign out', link:'/signout'},
]

const categories = [
  {value: "categories" , label: 'Categories', link: '/categories'},
  {value: "geosynthetics", label: 'Geosynthetics', link: 'categories/geosynthetics'}, 
  {value: "industrial-textiles", label: 'Industrial Textiles', link: 'categories/industrial-textiles'},
  {value: "agro-textiles", label: 'Agro Textiles' , link: 'categories/agro-textiles'},
  {value: "accessories", label: 'Accessories', link: '/accessories'},
  {value: "packaging-textiles", label: 'Packaging Textiles', link: 'categories/packaging-textiles'},
  {value: "erosion-control", label: 'Erosion Control', link: 'categories/erosion-control'},
]

export default function NavBarMain() {
    return(
        <div className="flex relative text-lg text-bold gap-10 justify-center text-primary  h-28 w-full" >
            <div className="w-40 h-32 p-4 absolute left-0 top-0">
              <img src={logo} className="w-full h-full brightness-100" alt="logo" />
            </div>
            
            <div className="relative flex flex-row min-w-fit w-6/12 justify-between">
                <SelectNavItem value="categories" options={categories} />
                {links.map((item) => <NavItem name={item.name} link={item.link}/>)}
            </div>
        </div>
    );
}
