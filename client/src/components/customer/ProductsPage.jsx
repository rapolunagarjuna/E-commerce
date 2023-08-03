import PersistentDrawerLeft from './SideBar';
import CustomSelect from '../CustomSelect';



const products = [
    {productCode: 1, title: 'Product 1', description: 'Our geosynthetics are designed to enhance soil performance, providing reinforcement, separation, filtration, and containment solutions for civil engineering projects.' , category: 'geosynthetics'},
    {productCode: 2, title: 'Product 2', description: 'For industrial applications, our industrial textiles are engineered to meet the demanding requirements of various industries, offering strength, durability, and reliability.'  , category: 'industrial-textiles'},
    {productCode: 3, title: 'Product 3', description: 'Our erosion control products are designed to protect and stabilize soil surfaces against erosion and environmental factors.' , category: 'geosynthetics'},
    {productCode: 4, title: 'Product 4', description: 'Our erosion control products are designed to protect and stabilize soil surfaces against erosion and environmental factors.'  , category: 'agro-textiles'},
    {productCode: 5, title: 'Product 5', description: 'Our erosion control products are designed to protect and stabilize soil surfaces against erosion and environmental factors.' , category: 'geosynthetics'},
    {productCode: 6, title: 'Product 6', description: 'Our erosion control products are designed to protect and stabilize soil surfaces against erosion and environmental factors.' , category: 'industrial-products'},
    {productCode: 7, title: 'Product 7', description: 'Our erosion control products are designed to protect and stabilize soil surfaces against erosion and environmental factors.' , category: 'geosynthetics'},
]

const options = [
    {value: 'none', label: 'None'},
    {value: 'geosynthetics', label: 'Geosynthetics'},
    {value: 'industrial-textiles', label: 'Industrial Textiles'},
    {value: 'agro-textiles', label: 'Agro Textiles'},
    {value: 'packaging-textiles', label: 'Packaging Textiles'},
    {value: 'accessories', label: 'Accesories'},
    {value: 'erosion-control', 'label': 'Erosion Control'},
]


function Item({item}) {
    return (
        <div className='p-5 mt-5 mb-5 w-full bg-slate-100 h-fit border hover:-translate-y-5 border-primary shadow-2xl hover:bg-secondary hover:cursor-pointer '> 
            <div className='flex flex-row h-64 text-lg justify-between ' >
                <div className='w-5/12'>
                    <p className='text-primary text-3xl w-fit '>{item.title}</p>
                    <div className='mt-5'>{item.description}</div>
                </div>
                
                <div className='w-5/12 bg-slate-900'><img alt='product image' /></div>
            </div>
        </div>
    )
}

export default function CustomerProducts() {
    return (
        <PersistentDrawerLeft >
            <div w-full h-full> 
                <div className="w-8/12 flex flex-col m-auto justify-center items-center">
                    <p className="mt-16 mb-5 text-center text-primary text-5xl">Products</p>


                    <div className='flex flex-row w-full h-fit justify-end'>
                        <div className='w-64'><CustomSelect options={options} value='none' onChange={()=>{}} /></div>
                    </div>

                    {products.map((item, index) => <Item key={index} item={item} />)}

                    

                </div>
            </div>
        </ PersistentDrawerLeft>
    )
}