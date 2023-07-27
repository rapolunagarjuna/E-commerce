import { useState } from "react";
import BlueBtn from '../components/BlueBtn';
import GreenBtn from '../components/GreenBtn';
import CustomSelect from "./CustomSelect";

const options = [
    {
      value: 'option1',
      label: 'Option 1',
    },
    {
      value: 'option2',
      label: 'Option 2',
    },
    {
      value: 'option3',
      label: 'Option 3',
    }
  ];


function Item({ item, cart, setCart }) {

    const dimensionKeys = Object.keys(item.dimensions);
    const selectOptions = dimensionKeys.map(key => ({ value: key, label: item.dimensions[key] }));
    const matchingCartItem = cart.find(cartItem => cartItem.dimensionKey === selectOptions[0].value) || {};
    const [activeOption, setActiveOption] = useState(selectOptions.find(option => option.value === matchingCartItem.dimensionKey) || selectOptions[0]);
    const [numRolls, setNumRolls] = useState(matchingCartItem.numRolls || 0);
    const [pricePerRoll, setPricePerRoll] = useState(matchingCartItem.pricePerRoll || 0);

    const handleOptionChange = selectedOption => {
        setActiveOption(selectedOption);
        const matchingCartItem = cart.find(cartItem => cartItem.dimensionKey === selectedOption.value);
        setNumRolls(matchingCartItem?.numRolls || 0);
        setPricePerRoll(matchingCartItem?.pricePerRoll || 0);
    }

    const handleNumRollsChange = (event) => {
        setNumRolls(Number(event.target.value));
    }

    const handlePriceChange = (event) => {
        setPricePerRoll(Number(event.target.value));
    }

    const handleAddToCart = () => {
        setCart([...cart, {itemTitle: item.title, dimensionKey: activeOption, numRolls, pricePerRoll}]);
    }

    const handleUpdateCart = () => {
        setCart(cart.map(cartItem => cartItem.dimensionKey === activeOption ? {...cartItem, numRolls, pricePerRoll} : cartItem));
    }



    return (
        <div className="w-7/12 h-fit p-5 flex flex-col text-primary border border-primary mt-10 mb-10 mx-auto">
            <p className="text-4xl font-black">{item.title}</p>
            <p className="text-lg">{item.description}</p>
            <div className="mt-5  h-min w-full flex flex-row">
                <div className="w-6/12 h-full"><img src={item.imgSrc} className="object-cover object-center" alt='item image'/></div>
                <div className="w-6/12 h-full flex flex-col justify-end text-xl">
                    <p>Product dimensions:</p>
                    <div className="pl-6">
                        {/* <CustomSelect
                            options={selectOptions}
                            value={activeOption}
                            onChange={handleOptionChange}
                        /> */}
                        <CustomSelect
                            options={options}
                            value={options[0].value}
                            onChange={handleOptionChange}
                        />

                    </div>
                    
                    <div className="mt-6 w-full flex flex-col">
                        <p>Number of rolls:</p>
                        <div className="pl-6 w-full">
                            <input
                                className="p-3 w-full h-fit border border-primary"
                                type="number"
                                placeholder="Enter number of rolls"
                                value={numRolls}
                                onChange={handleNumRollsChange}/>
                        </div>
                        
                    </div>

                    <div className="mt-6">
                        <p>Price quoted per roll:</p>
                        <div className="flex flex-row h-fit w-full">
                            <span className="text-center my-auto h-fit justify-center">$</span>
                            <input
                                className="w-full ml-3 p-3 h-fit border border-primary" 
                                type="number"
                                placeholder="Enter the price"
                                value={pricePerRoll}
                                onChange={handlePriceChange}/>
                        </div>      
                    </div>

                    <div className="mt-6 flex flex-row justify-end">
                        {(cart.find(cartItem => cartItem.dimensionKey === activeOption)) ? 
                            <GreenBtn name="Update Cart" func={handleUpdateCart}/> : 
                            <BlueBtn name="Add to Cart" func={handleAddToCart}/>
                        }
                    </div>
                </div>
            </div>
        </div>  
    );
}


export default function Shop() {
    const items = [
        {title: 'Item 1', description:'qweqweqweqweqweqweqweqweqwe', imgSrc: 'https://images.unsplash.com/photo', dimensions:{"option1" : "option1 description", "option2" : "option2 description", "option3" : "option3 description"} },
        {title: 'Item 2', description:'qweqweqweqweqweqweqweqweqwe', imgSrc: 'https://images.unsplash.com/photo', dimensions:{"option1" : "option1 description", "option2" : "option2 description", "option3" : "option3 description"} },
        {title: 'Item 3', description:'qweqweqweqweqweqweqweqweqwe', imgSrc: 'https://images.unsplash.com/photo', dimensions:{"option1" : "option1 description", "option2" : "option2 description", "option3" : "option3 description"} },
    ];

    const [cart, setCart] = useState([
        {itemTitle: 'Item 1', dimensionKey: 'option1', numRolls: 5, pricePerRoll: 20},
        {itemTitle: 'Item 1', dimensionKey: 'option2', numRolls: 2, pricePerRoll: 25},
    ]);

    const getItemCart = (itemTitle) => {
        return cart.filter(cartItem => cartItem.itemTitle === itemTitle);
    };

    return (
        <div className="w-full h-fit">
            {items.map(item => <Item key={item.title} item={item} cart={getItemCart(item.title)} setCart={setCart} />)}
        </div>
    );
}