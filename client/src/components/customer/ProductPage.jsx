import PersistentDrawerLeft from './SideBar';
import { useParams } from "react-router-dom";
import CustomSelect from "../CustomSelect";
import BlueBtn from "../BlueBtn";
import GreenBtn from "../GreenBtn";

const product = {
    productCode : 'productCode',
    title : 'Product',
    description : 'Description',
    price : 'Price', 
    dimensions : ['dimension1', 'dimension2', 'dimension3' , 'dimension4'],
}

const cart = [{
    productCode: 'productCode',
    price: 'Price',
    quantity: 'Quantity',
    dimension: 'dimension1',
}]


export default function ProductPage() {

    const productCode = useParams().productCode;

    const [activeOption, setActiveOption] = useState(product.dimensions[0]);
    const [quantity, setQuantity] = useState(cart.filter(item => item.productID === product.dimensions[0].value)?.quantity || 0);
    const [price, setPrice] = useState(cart.find(item => item.productID === product.dimensions[0].value)?.price || 0);
    const [status, setStatus] = useState(cart.find(item => item.productID === product.dimensions[0].value)? true : false);


    function getPricePerRoll() {
        return cart.find(item => item.productID === activeOption.value)?.price || 0;
    };

    function getNumberOfRolls() {
        return cart.filter(item => item.productID === activeOption.value)?.quantity || 0
    };

    const handleOptionChange = selectedOption => {
        setActiveOption(selectedOption);
        setQuantity(cart.filter(item => item.productID === selectedOption.value)?.quantity || 0);
        setPrice(cart.find(item => item.productID === selectedOption.value)?.price || 0);
        setStatus(cart.find(item => item.productID === selectedOption.value)? true : false);
    }

    const handleNumRollsChange = (event) => {
        setQuantity(Number(event.target.value));
    }

    const handlePriceChange = (event) => {
        setPrice(Number(event.target.value));
    }

    const handleAddToCart = () => {
        console.log({price: price, quantity: quantity, category: product.category, productID: activeOption.value});
    }

    const handleUpdateCart = () => {
        console.log({price: price, quantity: quantity, category: product.category, productID: activeOption.value});
    }


    return (
        <PersistentDrawerLeft >
            <div w-full h-full>
                <div className="flex flex-col m-auto justify-center items-center">
                    <div className=" w-6/12 h-fit m-auto p-8 text-primary">
                        <p className="text-4xl mb-10">{product.title}</p>
                        <p className="text-xl mb-10">{product.description}</p>

                        <div className="flex flex-row text-xl">
                            <div className="w-6/12 h-full"><img src={product.imgSrc} /></div>
                            <div className="flex flex-col w-6/12 h-full pl-10 justify-between space-y-10">
                                
                                <div className="w-full h-fit ">
                                    <p>Product Dimensions:</p>
                                    <div className="pl-6">
                                        <CustomSelect
                                            options={product.dimensions}
                                            value={activeOption.value}
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
                    

                </div>
            </div>
        </ PersistentDrawerLeft>
    )
}