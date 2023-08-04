import { useState } from 'react';
import { useParams } from "react-router-dom";
import PersistentDrawerLeft from './SideBar';
import CustomSelect from "../CustomSelect";
import BlueBtn from "../BlueBtn";
import GreenBtn from "../GreenBtn";

const product = {
    productCode : '1',
    title : 'Product',
    description : 'Description',
    price : 'Price', 
    dimensions : ['dimension1', 'dimension2', 'dimension3' , 'dimension4'],
}

const options = [
    {value: "dimension1", label: "Dimension 1"},
    {value: "dimension2", label: "Dimension 2"},
    {value: "dimension3", label: "Dimension 3"},
    {value: "dimension4", label: "Dimension 4 "}
]

const cart = [{
    productCode: '1',
    price: 4555,
    quantity: 45,
    dimension: 'dimension1',
}]


export default function ProductPage() {

    const productCode = useParams().productCode;

    const [activeOption, setActiveOption] = useState(product.dimensions[0]);
    const [quantity, setQuantity] = useState(cart.find(item => item.productCode === product.productCode && product.dimensions[0] === item.dimension)?.quantity || 0);
    const [price, setPrice] = useState(cart.find(item => item.productCode === product.productCode && product.dimensions[0] === item.dimension)?.price || 0);
    const [status, setStatus] = useState(cart.find(item => item.productCode === product.productCode && product.dimensions[0] === item.dimension)? true : false);


    function getPricePerRoll() {
        return cart.find(item => item.productCode === product.productCode && item.dimension === activeOption)?.price || 0;
    };

    function getNumberOfRolls() {
        return cart.find(item => item.productCode === product.productCode && item.dimension === activeOption)?.quantity || 0;
    };

    const handleOptionChange = selectedOption => {
        setActiveOption(selectedOption);
        setQuantity(cart.find(item => item.productCode === product.productCode && item.dimension === selectedOption)?.quantity || 0);
        setPrice(cart.find(item => item.productCode === product.productCode && item.dimension === selectedOption)?.price || 0);
        setStatus(cart.find(item => item.productCode === product.productCode && item.dimension === selectedOption)? true : false);
    }

    const handleNumRollsChange = (event) => {
        setQuantity(Number(event.target.value));
    }

    const handlePriceChange = (event) => {
        setPrice(Number(event.target.value));
    }

    const handleAddToCart = () => {
        console.log({dimension:activeOption ,price: price, quantity: quantity, productCode: product.productCode});
    }

    const handleUpdateCart = () => {
        console.log({dimension:activeOption ,price: price, quantity: quantity, productCode: product.productCode});
    }


    return (
        <PersistentDrawerLeft >
            
            <div className="mx-auto my-auto laptop:w-8/12 tablet:w-10/12 h-fit p-8 text-primary flex flex-col justify-center">
                
                <p className="text-4xl mb-10">{product.title}</p>
                <p className="text-xl mb-10">{product.description}</p>

                <div className="flex w-full flex-row text-xl">
                    <div className="w-6/12 h-full"><img src={product.imgSrc} /></div>
                    
                    <div className="flex flex-col w-6/12 h-full pl-10 justify-between space-y-10">    
                        <div className="w-full h-fit ">
                            <p>Product Dimensions:</p>
                            <div className="pl-6 h-6">
                                <CustomSelect
                                    options={options}
                                    value={activeOption}
                                    onChange={handleOptionChange}
                                />
                            </div>
                        </div>

                        <div className="w-full h-fit">
                            <p>Number of rolls:</p>
                            <div className="pl-6 w-full">
                                <input
                                    className="p-3 w-full h-fit border border-primary"
                                    type="number"
                                    placeholder="Enter number of rolls"
                                    value={quantity}
                                    onChange={handleNumRollsChange}/>
                                </div>
                        </div>

                        <div className="w-full h-fit">
                            <p>Price quoted per roll:</p>
                            <div className="flex flex-row h-fit w-full">
                                <span className="text-center my-auto h-fit justify-center">$</span>
                                <input
                                    className="w-full ml-3 p-3 h-fit border border-primary" 
                                    type="number"
                                    placeholder="Enter the price"
                                    value={price}
                                    onChange={handlePriceChange}/>
                            </div>
                        </div>

                        <div className="w-full h-fit flex flex-row justify-end">
                            {status ? 
                                <GreenBtn name="Update Cart" func={handleUpdateCart}/> : 
                                <BlueBtn name="Add to Cart" func={handleAddToCart}/>
                            }
                        </div>

                    </div>
                
                </div>
            </div>

        </ PersistentDrawerLeft>
    )
}