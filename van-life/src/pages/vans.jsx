import React from 'react'
import '../style/van.css'
export default function Vans() {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
      fetch("/api/vans")
        .then((res) => res.json())
        .then((data) => setData(data.vans));
    }, []);
    const vanElements = data.map((van) => (
      <div key={van.id} className="van-tile">
        <img src={van.imageUrl} alt={van.name} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type}`}>{van.type}</i>
      </div>
    ));

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