import React from 'react'
import '../style/van.css'
export default function Vans() {
    const [data,setData] = React.useState(null)
    React.useEffect((()=>{
        fetch("/api/vans")
          .then((res) => res.json())
          .then((data) => setData(data));
    }),[])
    console.log(data)
  return (
    <div className="vans-page">
      <h1>Explore our Van options</h1>
      <div className="cat-section">
        <div className='filter'>
          <div className="cat">Simple</div>
          <div className="cat">Luxury</div>
          <div className="cat">Rugged</div>
        </div>
        <div className="clear-filter">Clear filters</div>
      </div>
    </div>
  );
}