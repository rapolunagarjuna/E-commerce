import { useState} from "react"

export default function SearchBar({value, onChange, items}) {
    const [search, setSearch] = useState(value);

    function filterItems(targetProductCode) {
        if (targetProductCode === "") {
            return items;
        }
        return items.filter(item => item.productCode.toLowerCase().includes(targetProductCode.toLowerCase()));
        
    }

    return (
        <div className="border border-primary bg-white mb-3 w-full text-primary 2xl:text-xl h-min">
            <input
                className="w-full h-full p-3" 
                type="text" 
                placeholder="Enter product code to search"
                value={search}
                onChange={(e)=>{
                    setSearch(e.target.value); 
                    onChange(filterItems(e.target.value));
                }}
            ></input>
        </div>
    )
}