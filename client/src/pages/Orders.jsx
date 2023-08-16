import { useNavigate } from "react-router-dom";
import NavBarMain from "../components/NavBarMain";
import Footer from "../components/Footer";


export default function Orders () {
    const navigate = useNavigate();
    const orders = [{
        orderNumber: '1234567890',
        status: "Delivered",
        date: "23/4/2023",
        }, {
            orderNumber: '1234567890',
            status: "Delivered",
            date: "23/4/2023",
        }, {
            orderNumber: '1234567890',
            status: "Delivered",
            date: "23/4/2023",
        }
    ]

    const handleOnClick = (orderNumber) => {
        navigate("/invoice/"+orderNumber, { replace: true });
    }

    return (
        <div className="min-h-screen w-full flex flex-col justify-center items-center bg-white">
            <NavBarMain />
            
            <div className="m-auto w-6/12">
                <p className="mb-10 text-center text-5xl">Your Orders</p>
                <div className="border-primary border-l border-r w-full border-b h-fit text-xl">
                    {orders.map(order => 
                        <div className="border-primary border-t p-5 flex flex-row hover:bg-secondary text-center hover:cursor-pointer" onClick={()=>handleOnClick(order.orderNumber)} >
                            <div className="w-4/12 h-fit" >{order.orderNumber}</div>
                            <div className="w-4/12 h-fit">{order.status}</div>
                            <div className="w-4/12 h-fit">{order.date}</div>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
}