import Footer from "../components/footer.jsx";
import Header from "../components/header.jsx";
import '../style/about.css'  
import image from '../assets/bg-about.png'
export default function About(){
    return (
      <>
        <Header />
        <div className="about-page">
          <img src={image} alt="About Us" className="about-image" />

          <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉) Our
            team is full of vanlife enthusiasts who know firsthand the magic of
            touring the world on 4 wheels.
          </p>
          <div className="explore-vans">
            <h3>Your destination is waiting.</h3>
            <h3>Your van is ready.</h3>
            <button>Explore our vans</button>
          </div>
          
        </div>
        <Footer />
      </>
    );
}