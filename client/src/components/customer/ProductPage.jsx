import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import PersistentDrawerLeft from './SideBar';
import CustomSelect from "../CustomSelect";
import BlueBtn from "../BlueBtn";
import GreenBtn from "../GreenBtn";
import Cookies from 'js-cookie';

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
}];


export default function ProductPage() {

    const productCode = useParams().productCode;
    const [options, setOptions] = useState([]);
    const [product, setProduct] = useState({});
    const [cart, setCart] = useState([]);
    const [activeOption, setActiveOption] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [status, setStatus] = useState(false);

    useEffect(() => {
    // Fetch product data using the product code from the API
    fetch(`http://localhost:3000/api/products/${productCode}`)
      .then((response) => response.json())
      .then((data) => {
        const product = data.product;
        const cart = data.cart;
        setProduct(product);
        setActiveOption(product.dimensions[0]);
        setQuantity(cart.find(item => item.productCode === product.productCode && product.dimensions[0] === item.dimension)?.quantity || 0);
        setPrice(cart.find(item => item.productCode === product.productCode && product.dimensions[0] === item.dimension)?.price || 0);
        setStatus(cart.find(item => item.productCode === product.productCode && product.dimensions[0] === item.dimension)?true: false);
        setCart(cart);
        console.log(cart);
        const dimensionOptions = product.dimensions.map((dimension) => ({
            value: dimension,
            label: dimension,
          }));
        setOptions(dimensionOptions);
        
    })
      .catch((error) => {
        console.error('Error fetching product:', error);
      });
  }, [productCode]);



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
        const data = {
            productCode: productCode,
            dimension: activeOption,
            price: price,
            quantity: quantity,
        }
        const token = Cookies.get('token');
        fetch(`http://localhost:3000/api/cart?token=${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify(data)
                })
                .then(response => response.json())
                .then(data => {
                    setCartItems([...cartItems, updatedCart]);
                })
                .catch((error) => {
                    // Handle the error
                });

    }

    const handleUpdateCart = () => {


        console.log({dimension:activeOption ,price: price, quantity: quantity, productCode: product.productCode});
    }


    return (
        <PersistentDrawerLeft >
            
            <div className="mx-auto my-auto laptop:w-8/12 tablet:w-10/12 h-fit p-8 text-primary flex flex-col justify-center">
                
                <p className="text-4xl mb-10">{product.name}</p>
                <p className="text-xl mb-10">{product.description}</p>

                <div className="flex w-full h-fit flex-row text-xl">
                    <div className="w-6/12 h-full">
                    <img className='w-full h-full object-cover object-center' src={`data:image/jpeg;base64,${product.imgSrc}`} alt={product.name} />
                    </div>
                    
                    <div className="flex flex-col w-6/12 h-full pl-10">    
                        <div className="w-full h-fit ">
                            <p>Product Dimensions:</p>
                            <div className="pl-6 h-18">
                                <CustomSelect
                                    options={options}
                                    value={activeOption}
                                    onChange={handleOptionChange}
                                />
                            </div>
                        </div>

                        <div className="w-full h-fit mt-1">
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

                        <div className="w-full h-fit mt-3">
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

                        <div className="w-full h-fit flex flex-row justify-end mt-7">
                            {status ? 
                                <GreenBtn name="Update Cart" func={handleAddToCart}/> : 
                                <BlueBtn name="Add to Cart" func={handleAddToCart}/>
                            }
                        </div>

                    </div>
                
                </div>
            </div>

        </ PersistentDrawerLeft>
    )
}