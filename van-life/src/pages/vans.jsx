import React from 'react'
import '../style/van.css'
import Category from "../components/category.jsx";
import { Link } from "react-router-dom";

export default function Vans() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setData(data.vans));
  }, []);

  const vanElements = data.map((van) => (
    <Link
      to={`/vans/${van.id}`}
      key={van.id}
      className="van-tile"
      state={{ van }}
    >
      <img src={van.imageUrl} alt={van.name} />
      <div className="van-info">
        <h3 className="van-title">{van.name}</h3>
        <p>
          <span className="bold">{`${van.price}$`}</span>
          <br />
          <span>/day</span>
        </p>
      </div>
      <Category type={van.type} />
    </Link>
  ));
  function handleClick(id) {
    console.log("clicked id:", id);
  }

  return (
    <div className="vans-page">
      <h1>Explore our Van options</h1>
      <div className="cat-section">
        <div className="filter">
          <div className="cat">Simple</div>
          <div className="cat">Luxury</div>
          <div className="cat">Rugged</div>
        </div>
        <div className="clear-filter">Clear filters</div>
      </div>
      <div className="vans">{vanElements}</div>
    </div>
  );
}