import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <div className="flex text-xl gap-10 justify-center font-sans text-zinc-50 bg-blue-950 h-32 w-full" >
            <div className="w-64 h-32 bg-blue-500"></div>
            <ul className="flex gap-10 mt-auto">
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/products'>PRODUCTS</Link></li>
                <li><Link to='/about'>ABOUT US</Link></li>
                <li><Link to='/contact'>CONTACT</Link></li>
                <li><Link to='/news'>NEWS</Link></li>
                <li><Link to='/signin'>SIGN IN</Link></li>
            </ul>
        </div>
    );
}