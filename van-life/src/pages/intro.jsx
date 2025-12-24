import { Link } from "react-router-dom";
export default function Intro() {
  return (
    <>
      <div className="hero-image">
        <div className="content">
          <h2>You got the travel plans, we got the travel vans.</h2>
          <p>
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
          <Link to={"/vans"}>
            <button className="button">Find your van</button>
          </Link>
        </div>
      </div>
    </>
  );
}
