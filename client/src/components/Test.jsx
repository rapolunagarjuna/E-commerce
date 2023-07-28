import ProductPage from "../pages/ProductPage";
import image from "../assets/images/about.jpg";


export default function Test() {
  const product = { 
    title: "title",
    description: "description",
    category: "geosynthetics",
    imgSrc: image,
    dimensions: [
        {value: "EC23", label: "Option 1"},
        {value: "EC24", label: "Option 2"},
        {value: "EC25", label: "Option 3"},
    ],
  };

  const cart = [
      {productID: "EC25", quantity: 30, category: "geosynthetics", price: 300},
      {productID: "EC24", quantity: 20, category: "geosynthetics", price: 200},
  ];


  return (
      <div>
          <ProductPage product={product} cart={cart}/>
      </div>
  )
}