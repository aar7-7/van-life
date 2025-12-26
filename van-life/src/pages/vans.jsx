import React from 'react'
import '../style/van.css'
import Category from "../components/category.jsx";
import { Link } from "react-router-dom";

export default function Vans() {
  const [data, setData] = React.useState([]);
  const [filterType, setFilterType] = React.useState(null);
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setData(data.vans));
  }, []);

  const filteredVans = filterType
    ? data.filter((van) => van.type === filterType)
    : data;

  const vanElements = filteredVans.map((van) => (
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

  return (
    <div className="vans-page">
      <h1>Explore our Van options</h1>
      <div className="cat-section">
        <div className="filter">
          <div onClick={() => setFilterType("simple")} className="cat">
            Simple
          </div>
          <div onClick={() => setFilterType("luxury")} className="cat">
            Luxury
          </div>
          <div onClick={() => setFilterType("rugged")} className="cat">
            Rugged
          </div>
        </div>
        <div onClick={() => setFilterType(null)} className="clear-filter">
          Clear filters
        </div>
      </div>
      <div className="vans">{vanElements}</div>
    </div>
  );
}