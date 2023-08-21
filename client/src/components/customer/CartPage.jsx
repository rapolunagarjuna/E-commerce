import { useState, useEffect } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import PersistentDrawerLeft from './SideBar';
import BlueBtn from '../BlueBtn'
import Cookies from 'js-cookie';

function AddRemoveButton({name, addFunction, removeFunction}) {
    return (
        <div className='w-fit flex flex-row gap-2 items-center justify-center'> 
            <div className='bg-gray-200 border border-slate-900 hover:bg-secondary text-xs p-2 hover:text-base rounded-full hover:cursor-pointer shadow-xl' onClick={removeFunction}><FaMinus /></div>
            <span >{name}</span>
            <div className='bg-gray-200 border border-slate-900 hover:bg-secondary text-xs p-2 hover:text-base rounded-full hover:cursor-pointer shadow-xl' onClick={addFunction}><FaPlus /></div>  
        </div>
    );
}


function IndividualProduct({item, updateItem}) {

    const [quantity, setQuantity] = useState(item.quantity);
    const [price, setPrice] = useState(item.price);
    const [total, setTotal] = useState(item.price * item.quantity);

    useEffect(() => {
        updateQuantityAndTotal(quantity);
    }, [quantity]);

    useEffect(() => {
        updatePriceAndTotal(price);
    }, [price]);

    const updateQuantityAndTotal = newQuantity => {
        const updatedItem = { ...item, quantity: newQuantity, total: newQuantity * price };
        setQuantity(newQuantity);
        setTotal(newQuantity * price);
        updateItem(updatedItem);

        const token = Cookies.get('token');
        fetch(`http://localhost:3000/api/cart?token=${token}`, {
            method: 'POST', // Use 'PUT' if appropriate for your API design
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedItem),
        })
        .then(response => response.json())
        .then(data => {
            // Handle success if needed
        })
        .catch(error => {
            // Handle the error
        });
    };

    const updatePriceAndTotal = newPrice => {
        const updatedItem = { ...item, price: newPrice, total: newPrice * quantity };
        setPrice(newPrice);
        setTotal(quantity * newPrice);
        updateItem(updatedItem);

        const token = Cookies.get('token');
        fetch(`http://localhost:3000/api/cart?token=${token}`, {
            method: 'POST', // Use 'PUT' if appropriate for your API design
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedItem),
        })
        .then(response => response.json())
        .then(data => {
            // Handle success if needed
        })
        .catch(error => {
            // Handle the error
        });
    };

    const addQuantity = e => {
        e.preventDefault();
        updateQuantityAndTotal(quantity + 1);
    };

    const removeQuantity = e => {
        e.preventDefault();
        if (quantity > 0) {
            updateQuantityAndTotal(quantity - 1);
        }
    };

    const addPrice = e => {
        e.preventDefault();
        updatePriceAndTotal(price + 1);
    };

    const removePrice = e => {
        e.preventDefault();
        if (price > 0) {
            updatePriceAndTotal(price - 1);
        }
    };

    return (
        // <div className='flex flex-row justify-end h-fit bg-slate-100 mt-2 mb-2 border-gray-200 border-b-2 items-center text-center text-xl  p-4'>
        //     <div className='w-80 h-40'>
        //     <img className='w-full h-full object-cover object-center' src={`data:image/jpeg;base64,${item.imgSrc}`} alt={item.name} />
        //     </div>
        //     <div className='w-full h-24 flex flex-row justify-center items-center'>
        //         <p className='ml-3 text-center'>{item.name}</p>
        //     </div>
        //     <div className='w-64 flex flex-row justify-center items-center'> <AddRemoveButton name={quantity} addFunction={addQuantity} removeFunction={removeQuantity} /> </div>
        //     <div className='w-64 flex flex-row justify-center items-center'><AddRemoveButton name={price} addFunction={addPrice} removeFunction={removePrice}  /></div>
        //     <div className='w-64'>$ {total}</div>
        // </div>
        <div className='flex flex-col p-4 my-4 bg-white'>
            <div className='flex flex-row'>
                <div className='w-full tablet:w-96 laptop:w-6/12 mb-4 sm:mb-0'>
                    <img className='object-cover object-center w-full h-full' src={`data:image/jpeg;base64,${item.imgSrc}`} alt={item.name} />
                </div>


                <div className='flex flex-col w-6/12 ml-5 text-xl text-primary'>
                    
                    <div className='text-xl color-primary max-h-36 w-full overflow-x-hidden overflow-y-auto w-full mb-3'>{item.name}</div>
                    <div className='text-xl color-primary w-full h-8 ocerflow-x-hidden overflow-y-auto'>Dimension: <span className='text-center w-full'>{item.dimension}</span></div>
                    
                    <div className='flex flex-row w-full'>
                        <div className='flex flex-col w-24 h-fit'>
                            <div className='h-10'>Quantity</div>
                            <div className='h-10'>Price</div>
                            <div className='h-10'>Sub total</div>
                        </div>
                        <div className='flex flex-col min-w-96 flex-grow h-fit ml-5 justify-center items-center'>
                            <div className='h-10'><AddRemoveButton name={quantity} addFunction={addQuantity} removeFunction={removeQuantity} /></div>
                            <div className='h-10'><AddRemoveButton name={price} addFunction={addPrice} removeFunction={removePrice} /></div>
                            <div className='h-10'>$ {total}</div>
                        </div>
                    </div>
                
                </div>
                

                
            </div>
        </div>
    )
}



export default function Cart() {

    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [tax, setTax] = useState(0);
    const [totalAfterTaxAndDiscount, setTotalAfterTaxAndDiscount] = useState(0);
    const [taxPercent, setTaxPercent] = useState(0);
    const [discountPercent, setDiscountPercent] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const token = Cookies.get('token');
        fetch(`http://localhost:3000/api/cart?token=${token}`, {
                method: 'GET', // This is important to include cookies
                })
                .then(response => response.json())
                .then(data =>
                    {console.log(data.cart);
                    setCartItems(data.cart)})
                .catch((error) => {
                    // Handle the error
                });

        setTaxPercent(0.15);
        setDiscountPercent(0.25);

    }, []);

    // This will calculate the total price whenever cartItems change
    useEffect(() => {
        const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotalPrice(total);
        setDiscount((total * discountPercent).toFixed(2));
        setTax(((total - total*discountPercent)*taxPercent).toFixed(2));
        setTotalAfterTaxAndDiscount(((total - total*discountPercent)*(1 + taxPercent)).toFixed(2));
    }, [cartItems]);

    const updateItem = (index, updatedItem) => {
        const newCartItems = [...cartItems];
        newCartItems[index] = updatedItem;
        setCartItems(newCartItems);
    };

    const createOrder = (e) => {
        e.preventDefault();
        const token = Cookies.get('token');
        setLoading(true);
        fetch(`http://localhost:3000/api/orders?token=${token}`, {
                method: 'POST', // This is important to include cookies
                })
                .then(response => response.json())
                .then(data =>
                    {   setCartItems([]);
                        setTotalPrice(0);
                        setDiscount(0);
                        setTax(0);
                        setTotalAfterTaxAndDiscount(0);
                        setLoading(false);
                        alert("Order succesfully placed");
                        console.log(data);})
                .catch((error) => {
                    setLoading(false);
                    // Handle the error
                });

    }

    return (
        <PersistentDrawerLeft >
            <div className='w-full h-full min-h-screen mb-10' >
                <div className="flex flex-col m-auto justify-center items-center">
                    <p className="mt-16 mb-16 text-primary text-center text-5xl">Your Cart</p>
                    
                    <div className='flex flex-row w-full justify-center '>
                        
                        <div className='flex flex-col w-7/12 2xl:w-5/12 ml-8' >
                            {cartItems.map((item, index) => 
                                <IndividualProduct item={item} updateItem={(updatedItem) => updateItem(index, updatedItem)}  />
                            )}
                        </div>

                        
                        <div className='shadow-xl bg-slate-50 mt-4 text-xl ml-16 w-fit p-7 h-fit border-2 border-primary '>
                            <p className='text-center text-2xl underline underline-offset-8 mb-6 text-primary'>Your cart summary</p>
                            <div className='flex flex-row mb-10 '>
                                <div className='w-fit h-fit text-primary'>
                                    <p>Sub total</p>
                                    <p>Discount</p>
                                    <p>Tax</p>
                                    <p>Total</p>
                                </div> 
                                <div className='w-fit h-fit ml-4'>
                                    <p>{"+" + totalPrice}</p>
                                    <p>{"-" + discount + "(" + discountPercent*100 + "%)"}</p>
                                    <p>{"+" + tax + "(" + taxPercent*100 + "%)" }</p>
                                    <p>{" " + totalAfterTaxAndDiscount}</p>
                                </div>
                            </div>
                            <BlueBtn name='Proceed to checkout' func={createOrder} isLoading={loading}/>
                        </div>

                    </div>
                    

                </div>
            </div>
        </ PersistentDrawerLeft>
    )
}