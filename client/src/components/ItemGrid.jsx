import { Link } from 'react-router-dom'

function Item({name, services, prodspecs, imgSrc}) {

    return(
        <div className="flex flex-row justify-center w-full p-5 h-full">
            <div className="w-96 pr-4" style={{height: "300px"}}>
                <img src={imgSrc} className="w-full h-full object-cover" 
                style={{paddingLeft:'10px'}}alt=" " />
            </div>
            <div
                className="bg-slate-200 ml-4 p-3 "
                style={{
                    width: '600px',
                    height: '300px',
                    overflowX: 'hidden',
                    overflowY: 'scroll',
                }}
            >
                <div className="bg-slate-200 w-full h-fit ml-2 ">
                    <div className='flex flex-col text-left w-full h-full justify-between'>
                        <h1 className="text-xl font-bold"> {name} </h1>
                        <p className='w-full'>{services}</p>
                        <h2><b><u>Product Specs:</u></b></h2>
                        <p className='w-full' >{prodspecs}</p>
                        <div className='flex flex-row justify-end w-full h-fit'>
                            <Link to='/contact' className='underline underline-offset-1 text-blue-700 text-sm'>Learn more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );                                                                                                                                                                                                                                                                                                                                                                           
}


export default function ItemGrid({products}) {
    return(
        <div className='flex flex-col m-auto w-fit h-full pt-20 pb-20'>
            {products.map(product => 
            <Item 
                key={product.name} 
                name={product.name} 
                services={product.services}
                prodspecs={product.prodspecs}
                imgSrc={product.imgSrc}
            />)}
        </div>
    );
}