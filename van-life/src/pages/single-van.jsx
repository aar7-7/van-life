import { useLocation,useNavigate } from "react-router-dom";
import '../style/single-van.css';
import Category from "../components/category"; 
import arrowBack  from "../assets/arrow-back.png";
export default function SingleVan() {
   const location = useLocation();
   const van = location.state?.van;
   const navigate = useNavigate();
  

   function handleBack() {
     navigate(-1);
   }
   
  return (
    <>
      <button className="back-button "
      onClick={handleBack}
      >
        <img src={arrowBack} alt="arrow-back" />
        <span>Back to all vans</span>
      </button>

      <div className="single-van-page">
        <img src={van.imageUrl} alt={van.name} />

        <div className="single-van-info">
          <Category type={van.type} />
          <h2>{van.name}</h2>
          <p>
            <span className="bold">{`${van.price}$`}</span>

            <span>/day</span>
          </p>
          <p className="description">{van.description}</p>
          <button className="rent-button">Rent this van</button>
        </div>
      </div>
    </>
  );
}