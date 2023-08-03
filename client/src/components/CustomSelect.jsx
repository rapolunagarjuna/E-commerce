import { useState, useEffect, useRef } from "react";
import upArrow from '../assets/images/up-arrow.png';
import dwnArrow from '../assets/images/down-arrow.png';

// options here is an array of object, with a value and a label
// the value prop is the value which will be displayed in the box.
// onChange is a callback function which will be called when the user changes the value.
// example is below:
// const options = [
//   {
//     value: 'option1',
//     label: 'Option 1',
//   },
//   {
//     value: 'option2',
//     label: 'Option 2',
//   },
//   {
//     value: 'option3',
//     label: 'Option 3',
//   },
// ];

function Option({ options, onChange, setActive }) {
    return (
        <div className="absolute w-full bg-slate-100 flex flex-col text-xl z-20 shadow-2xl border-l border-r border-b border-primary">
            {options.map((option) => (
                <div
                    key={option.value}
                    className="p-3 border-t border-primary hover:bg-secondary cursor-pointer"
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



export default function CustomSelect({ options, value, onChange }) {
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
            <div className="border bg-slate-100 border-primary mb-3 p-3 justify-end text-primary text-xl w-full h-min flex flex-row">
                <p className="w-full h-fit">{currentLabel}</p>
                <div className="h-8 hover:cursor-pointer " onClick={toggleDropdown}>
                    <img  src={active ? upArrow: dwnArrow } className=" h-full object-contain object-center" />
                </div>
            </div>
            {active && <Option options={options} setActive={setActive} onChange={onChange} />}
        </div>
    );
}