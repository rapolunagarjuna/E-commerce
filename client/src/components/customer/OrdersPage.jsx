import PersistentDrawerLeft from './SideBar';

const orders = [
    {orderNumber: 1, datePlaced: '2019-01-01', status: 'Pending', deliveryDate: '2019-01-01', totalPrice: 10000000, address: "sample address 1, MA-50023, USA"},
    {orderNumber: 2, datePlaced: '2019-01-01', status: 'Delivered', deliveryDate: '2019-01-01', totalPrice: 100000, address: "sample address 2, MA-50023, USA"},
    {orderNumber: 3, datePlaced: '2019-01-01', status: 'Pending', deliveryDate: '2019-01-0' , totalPrice: 100000000, address: "sample address 3, MA-50023, USA"}
]


function IndividualOrder({item}) {



    return(
        <div className='w-8/12 h-fit mt-4 mb-4 border border-stone-900 rounded-lg shadow-xl'>
            <div className='flex flex-row w-full rounded-t-lg text-slate-100 h-fit p-4 bg-primary justify-between'>
                <div>
                    <p>ORDER PLACED</p>
                    <p className='text-lg'>{item.datePlaced}</p>
                </div>
                <div>
                    <p>TOTAL</p>
                    <p className='text-lg'>${item.totalPrice}</p>
                </div>
                <div>
                    <p className='text-left'>ORDER #{item.orderNumber}</p>
                    <div className='flex flex-row justify-center items-center '>
                        <p className='text-slate-100 underline underline-offset-4 text-lg hover:cursor-pointer hover:text-secondary'>View order details</p>
                        <p className='mr-8 ml-8 text-xl'>|</p>
                        <p className='text-slate-100 underline underline-offset-4 text-lg hover:cursor-pointer hover:text-secondary'>View Invoice</p>
                    </div> 
                </div>
            </div>

            <div className='flex flex-col p-4 w-full rounded-b-lg h-fit bg-slate-100 border-t border-stone-900'>
                <p className='mb-3 text-xl text-primary'>Current status: <span className={item.status === "Delivered" ? 'text-2xl text-green-600' : 'text-2xl text-red-500'}>{item.status}</span> </p>
                <p className='mb-3'>{item.status === "Delivered"? "Delivered on: ": "Estimated Delivery by:"}<span className='text-xl pl-2'>{item.deliveryDate}</span></p>
                <p >Delivery Address:</p>
                <p>{item.address}</p>
            </div>

        </div>
    );
}


export default function Orders() {
    return (
        <PersistentDrawerLeft >
            <div className="w-full h-full min-h-screen">
                <div className="flex flex-col m-auto justify-center items-center">
                    <p className="mb-10 mt-16 text-primary text-center text-5xl">Your Orders</p>


                    {orders.map((order, index) => ( 
                        <IndividualOrder item={order}/>
                    ))}


                </div>
            </div>
        </ PersistentDrawerLeft>
    )
}