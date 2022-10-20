import './App.css';
import Card from './Card';
import Product from './Product';
import data from './data.json';
import { useEffect, useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { GetNewProps } from './actions';
function App() {
  const cardsContent = useSelector(state=>state.content);
  const dispatch = useDispatch();
  const storedProducts = JSON.parse(localStorage.getItem("oct-task-1")?localStorage.getItem("oct-task-1"):"[]");
  console.log(storedProducts,cardsContent);
  const [options,setOptions] = useState([{name:"Realme C2",price:10000}]);
  const [ProductType,setProductType] = useState("");
  let v = localStorage.getItem("oct-task-1");
  //const [cards,setCards] = useState(v?JSON.parse(v):{});
  function showCart(type){
    setOptions(data.Phones.find(e=>e.type == type).options);
    setProductType(type);
  }

  function selectingProduct(){
      if(ProductType=="Realme")
      return <Product options={options} type={ProductType} Name = "Realme C2" />
      else if(ProductType=="Samsung")
      return <Product options={options} type={ProductType} Name = "Galaxy" />
      else if(ProductType=="Intex")
      return <Product options={options} type={ProductType} Name = "Intex Cloud 4G" />
      else
      return ""
  }

  useEffect(()=>{
    dispatch(GetNewProps(ProductType,options,options[0].name));
  },[options,ProductType]);

  return (
    <>
      <div className='suppliersContainer'>
        <button onClick={()=>showCart("Realme")}>Realme</button>
        <button onClick={()=>showCart("Samsung")}>Samsung</button>
        <button onClick={()=>showCart("Intex")}>Intex</button>
      </div>
      <div className='cardsContainer'>
        <div className='card'>
        {(cardsContent.length>0?cardsContent:storedProducts).filter(e=>e.type === "Realme").map(e=><Card name={e.name} quantity={e.quantity} price={e.price} total={e.total}/>)}
        </div>
        <div className='card'>
        {(cardsContent.length>0?cardsContent:storedProducts).filter(e=>e.type === "Samsung").map(e=><Card name={e.name} quantity={e.quantity} price={e.price} total={e.total}/>)}
        </div>
        <div className='card'>
        {(cardsContent.length>0?cardsContent:storedProducts).filter(e=>e.type === "Intex").map(e=><Card name={e.name} quantity={e.quantity} price={e.price} total={e.total}/>)}
        </div>
      </div>
      <div>
      {/* {
        ProductType=="Realme"?
        <Product options={options} type={ProductType} Name = "Realme C2" />
        :<>
        {
          ProductType=="Samsung"?<Product options={options} type={ProductType} Name = "Galaxy" />
          :<>{
            ProductType=="Intex"?<Product options={options} type={ProductType} Name = "Intex Cloud 4G" />:null
          }</>
        }
        </>
        
      } */}
      <div>
      {
        // (ProductType=="Realme"?
        // <Product options={options} type={ProductType} Name = "Realme C2" />
        // :(ProductType=="Samsung"?<Product options={options} type={ProductType} Name = "Galaxy" />
        // :(ProductType=="Intex"?<Product options={options} type={ProductType} Name = "Intex Cloud 4G" />:"")))
        ProductType.length>0?<Product />:""
      }</div>
      </div>
    </>
  );
}

export default App;
