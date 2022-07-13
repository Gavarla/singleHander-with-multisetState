import React,{useState} from "react";
import "./style.css";

export default function App() {

  const [obj,setObj] = useState({a:1,
    age:20})
console.log(obj)   

const handler=(name,opretion)=>{
  setObj((preState)=>{
       return {...preState,[name]:opretion === "i" ? obj[name]+1:obj[name]-1}})
  }
  return (
    <div>
      
      



  
                
         {obj.a}
      <button onClick={()=>handler("a","i")}>i age</button>
      <button onClick={()=>handler("a","d")}>d age</button>
      
      {obj.age}
      <button onClick={()=>handler("age","i")}>i age</button>
      <button onClick={()=>handler("age","d")}>d age</button>
    
  


       
      
    </div>
  );
}
