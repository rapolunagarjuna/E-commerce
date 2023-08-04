import { useState, useEffect } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import PersistentDrawerLeft from './SideBar';
import BlueBtn from '../BlueBtn'
import imgSample from '../../assets/images/accessories/TPOST.webp';
import axios from 'axios';
import Cookie from 'js-cookie';

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
        // This will be triggered whenever the 'quantity' or 'total' state changes.
    }, [quantity, total, price]);

    const updateQuantity = (newQuantity) => {
        updateItem({...item, quantity: newQuantity, total: newQuantity * price});
    };

    const updatePrice = (newPrice) => {
        updateItem({...item, price: newPrice, total: newPrice * quantity});
    };

    const addQuantity = (e) => {
        e.preventDefault();
        setQuantity(quantity+1);
        updateQuantity(quantity+1);
        setTotal(price*(quantity+1));
    };

    const removeQuantity = (e) => {
        e.preventDefault();
        setQuantity(quantity-1);
        updateQuantity(quantity-1);
        setTotal(price*(quantity-1));
    };

    const addPrice = (e) => {
        e.preventDefault();
        setPrice(price+1);
        updatePrice(price+1);
        setTotal((price+1)*quantity);
    };

    const removePrice = (e) => {
        e.preventDefault();
        setPrice(price-1);
        updatePrice(price-1);
        setTotal((price-1) * quantity);
    };

    return (
        <div className='flex flex-row justify-end h-fit bg-slate-100 mt-2 mb-2 border-gray-200 border-b-2 items-center text-center text-xl  p-4'>
            <div className='w-80 h-40'><img className='w-full h-full object-cover object-center' src={imgSample} alt='product image' /></div>
            <div className='w-full h-24 flex flex-row justify-center items-center'>
                <p className='ml-3 text-center'>{item.name}</p>
            </div>
            <div className='w-64 flex flex-row justify-center items-center'> <AddRemoveButton name={quantity} addFunction={addQuantity} removeFunction={removeQuantity} /> </div>
            <div className='w-64 flex flex-row justify-center items-center'><AddRemoveButton name={price} addFunction={addPrice} removeFunction={removePrice}  /></div>
            <div className='w-64'>$ {total}</div>
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

    useEffect(() => {
        fetch('http://localhost:3000/api/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ /* your data here */ }),
                credentials: 'include', // This is important to include cookies
                })
                .then((response) => {
                    // Handle the response
                })
                .catch((error) => {
                    // Handle the error
                });

        const cart = [
            {productCode: '', name: "product 1" , quantity: 10, price: 10, total: 100 }, 
            {productCode: '', name: "product 2", quantity: 20, price: 30, total: 600 }, 
            {productCode: '', name: "product 3", quantity: 5, price: 40, total: 200 },
            {productCode: '', name: "product 4", quantity: 2, price: 50, total: 100 },
            {productCode: '', name: "product 5", quantity: 25, price: 60, total: 3000 },
        ]
        setTaxPercent(0.15);
        setDiscountPercent(0.25);
        setCartItems(cart);
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

    return (
        <PersistentDrawerLeft >
            <div className='w-full h-full min-h-screen mb-10' >
                <div className="flex flex-col m-auto justify-center items-center">
                    <p className="mt-16 mb-16 text-primary text-center text-5xl">Your Cart</p>
                    
                    <div className='flex flex-row w-full justify-center '>
                        
                        <div className='flex flex-col w-8/12 ml-8' >
                            <div className='flex flex-row justify-end text-lg text-center h-16 text-primary p-4'>
                                <div className='w-80'></div>
                                <div className='w-full text-center'>Product Name</div>
                                <div className='w-64 text-center'><p className='w-full text-center'>Quantity</p></div>
                                <div className='w-64 text-center'>Price</div>
                                <div className='w-64 text-center'>Total</div>
                            </div>
                            {cartItems.map((item, index) => 
                                <IndividualProduct item={item} updateItem={(updatedItem) => updateItem(index, updatedItem)}  />
                            )}
                        </div>

                        
                        <div className='shadow-xl bg-slate-50 mt-16 text-xl ml-16 w-fit p-7 h-fit border-2 border-primary '>
                            <p className='text-center text-2xl underline underline-offset-8 mb-6 text-primary'>Your cart summary</p>
                            <div className='flex flex-row mb-10 '>
                                <div className='w-fit h-fit text-primary'>
                                    <p>Total</p>
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
                            <BlueBtn name='Proceed to checkout' />
                        </div>

                    </div>
                    

                </div>
            </div>
        </ PersistentDrawerLeft>
    )
}