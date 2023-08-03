import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar';
import Footer from './Footer'

function Item({name, imgSrc, description}) {

    return (
        <div className='flex flex-row h-96 w-full mt-10 mb-10 justify-center items-center'>
            <div className='h-full' style={{width:'500px'}}>
                <img  src={imgSrc} alt='product image' className='w-full h-full object-cover object center'/>
            </div>
            <div className='h-full min-w-96 w-8/12 pl-10 overflow-y-auto'>
                <p className='text-primary text-3xl  '>{name}</p>
                <ul className='w-full h-fit overflow-y-auto'>
                    {description.split('\n').map((line, index) => (
                    // Render each line as a separate paragraph
                        <li className='w-full text-primary text-xl leading-loose' key={index}>{line}</li> 
                    ))}
                </ul>
            </div>
            
        </div>
        
    )
}




export default function IndividualCategoryGrid({category}) {


    return(
        <div className='flex flex-col justify-center items-center'>
            <NavBar />
            <div className='w-full flex flex-col justify-center items center relative' style={{height: '700px' ,backgroundImage: `url(${category.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <p className='text-5xl text-center font-extrabold pt-16 text-stone-50 m-auto relative z-10'>{category.title}</p>
                <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>
            
            <div className='flex flex-col mt-44 mb-44 w-8/12 h-fit justify-center items-center'>
                {category.products.map(product => <Item name={product.name} imgSrc={product.imgSrc} description={product.description}    />)}
            </div>

            <Footer />
        </div>
    );
}
