import React from "react";
let cart =[];
import Category from "../components/category.jsx";


export function addToCart(cartItem){
  cart.push({name:cartItem})

}

export default function Cart(){
  let matchingItem = [{
    id: "2",
    name: "Beach Bum",
    price: 80,
    description:
      "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
    imageUrl:
      "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png",
    type: "rugged",
  }];
    const [Van, setVan] = React.useState([]);
    React.useEffect(() => {
      fetch("/api/vans")
        .then((res) => res.json())
        .then((data) => setVan(data.vans));
    }, []);
    cart.forEach((cartItem)=>{
      Van.forEach((van)=>{
        if(cartItem.name === van.name){
          matchingItem = van
        }
      })
    })
    console.log(matchingItem)
    const vanElements = matchingItem.forEach((element)=>{
      <div className="vans">
        <img src={element.imageUrl} alt={element.name} />
        <div className="van-info">
          <h3 className="van-title">{element.name}</h3>
          <p>
            <span className="bold">{`${element.price}$`}</span>
            <br />
            <span>/day</span>
          </p>
        </div>
        <Category type={element.type} />
      </div>
    })
    return <>{vanElements}</>;

    
    
    
      
    

}