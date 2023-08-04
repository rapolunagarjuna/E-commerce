import PersistentDrawerLeft from './SideBar';

const orders = [
    {orderNumber: 1, datePlaced: '2019-01-01', status: 'Pending', deliveryDate: '2019-01-01', totalPrice: 10000000, address: "sample address 1, MA-50023, USA"},
    {orderNumber: 2, datePlaced: '2019-01-01', status: 'Delivered', deliveryDate: '2019-01-01', totalPrice: 100000, address: "sample address 2, MA-50023, USA"},
    {orderNumber: 3, datePlaced: '2019-01-01', status: 'Pending', deliveryDate: '2019-01-0' , totalPrice: 100000000, address: "sample address 3, MA-50023, USA"}
]


function IndividualOrder({item}) {

    return(
        <div className='w-full h-fit text-white bg-primary p-5 rounded-lg shadow-2xl'>
            <div className='text-xl'>
                <p>#{item.orderNumber}</p>
                <p>Status: <span className={item.status === "Delivered" ? 'text-green-400' : 'text-red-400'}>{item.status}</span></p> 
                <p className='text-base'>Ordered on: {item.datePlaced}</p>
                <p className='text-base'>{item.status === "Delivered"? "Delivered on: ": "Estimated delivery by:"}<span className='pl-2'>{item.deliveryDate}</span></p>
                <div className='flex flex-row justify-between mt-5 items-center '>
                    <p className='text-slate-100 underline underline-offset-4 text-base hover:cursor-pointer hover:text-secondary'>View order details</p>
                    <p className='text-slate-100 underline underline-offset-4 text-base hover:cursor-pointer hover:text-secondary'>View Invoice</p>
                </div>
            </div>
            
            {/* <div className='flex flex-row w-full text-slate-100 h-fit p-4 bg-primary justify-between'>
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
                     
                </div>
            </div>

            <div className='flex flex-col p-4 w-full  h-fit bg-slate-100 border-t border-stone-900'>
                <p className='mb-3 text-xl text-primary'>Current status: <span className={item.status === "Delivered" ? 'text-2xl text-green-600' : 'text-2xl text-red-500'}>{item.status}</span> </p>
                
                <p >Delivery Address:</p>
                <p>{item.address}</p>
            </div> */}

        </div>
    );
}


export default function Orders() {
    return (
        <PersistentDrawerLeft >
            <div className="w-full h-full min-h-screen">
                <div className="flex flex-col m-auto justify-center items-center">
                    <p className="mb-10 mt-16 text-primary text-center text-5xl">Your Orders</p>

                    <div className=' w-10/12    laptop:w-8/12 grid grid-cols-2 gap-x-5 gap-y-5 2xl:grid-cols-3 items-center'>
                        {orders.map((order, index) => ( 
                            <IndividualOrder item={order}/>
                        ))}
                    </div>

                </div>
            </div>
        </ PersistentDrawerLeft>
    )
}