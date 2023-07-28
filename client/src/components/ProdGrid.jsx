import { useNavigate } from 'react-router-dom'
import NavBarMain from './NavBarMain';
import Footer from './Footer'

function Item({name, imgSrc, link}) {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col w-full h-96 justify-end' onClick={()=>navigate(link)}
             style={{
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }} >
            <div className='flex h-16 flex-col justify-center w-full  text-center bg-secondary bg-opacity-50  text-xl text-primary '>
                <span>{name}</span>
                
            </div>
        </div>
    )
}

function Grid({products}) {
    return(
        <div className='grid mx-auto 2xl:w-9/12 2xl:grid-cols-3  w-10/12 xl:grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-16 pb-44 place-items-start'>
            {products.map(product => <Item name={product.name} imgSrc={product.imgSrc} link={product.link}    />)}
        </div>
    );
}



export default function IndividualCategoryGrid({category}) {


    return(
        <div className='flex flex-col justify-between'>
            <NavBarMain />
            <div className='w-full h-3/6 pt-36 pb-36 flex flex-col justify-center items center relative' style={{backgroundImage: `url(${category.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <p className='text-5xl text-center font-extrabold pt-16 text-stone-50 m-auto relative z-10'>{category.title}</p>
                <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>

            <div className='my-20'></div>

            <Grid products={category.products}/>
            
            <Footer />
        </div>
    );
}
