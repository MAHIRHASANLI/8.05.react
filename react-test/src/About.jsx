import { useState } from "react";
import {datas} from "./Data";
import { v4 as uuidv4 } from 'uuid';
const About = ()=>{
    let [products,setProducts]=useState(datas)
    let [newProducts, setNewProducts] = useState({name:"", price:""})
    function handleSearch(e){
        if(e.target.value.trim()==""){
          setProducts(datas)  
        }
          else{
            let aboutproduct = products.filter((product)=>
            product.name.trim().toLowerCase().includes(e.target.value.trim().toLowerCase())
            )
            setProducts(aboutproduct)
          }
    
    }
    function handeSort(){
        let sortetStudent = [... products.sort((a,b)=>a.price-b.price)]
        setProducts(sortetStudent)
    }
    function handleDelete(id){
      //
   
      let deletedsetProduct =  products.find((product,idx)=>{
          return {
            product: product.id==id,
              index:idx
          }
      });
      products.splice(deletedsetProduct.index,1);
      let newArray = [...products];
      setProducts(newArray);
  
      //
    //  let filterProduct=products.filter((product)=>product.id!==id)
    //  setProducts(filterProduct)
    }
    let inputValue
    function handleSubmit(e){

      e.preventDefault()
      
        newProducts.id=uuidv4()
    setProducts([...products,newProducts]);
    setNewProducts({name:'',price:''});
      
    console.log(inputValue);
  }
    function handleAdd(e){
  inputValue=e.target.value
  setNewProducts({...newProducts,[e.target.name]:e.target.value})

// }
    }
   function handleClear(){
    products.splice(0, products.length+1);
    setProducts(products)
   }
    return(
        <div className="inputProduct">
        <input type="text" onChange={(e)=>handleSearch(e)} placeholder="Search!"/>
        <button className="btn btn-success" onClick={handeSort} type="submit">Sort</button>
        <ul className="ul">
          {products && products.map((product) => {
          return <li className="product" key= {product.id}>{product.name} | {product.price}
          <button className="btn btn-danger" onClick={()=>handleDelete(product.id)}>Delete</button></li>
       })}
        </ul>
      <form onSubmit={(e)=>handleSubmit(e)} action="">
      <input name="name" onChange={(e)=>handleAdd(e)} value={newProducts.name} type="text" />
      <span></span>
        <input name="price" onChange={(e)=>handleAdd(e)} value={newProducts.price} type="number" min="0" max="10"/>
        <button className="btn btn-success">Add</button>
        <button  onClick={handleClear}>Clear All</button>
      </form>
        </div>
    )
}
export default About

