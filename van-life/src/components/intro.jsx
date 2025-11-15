import Header from "./header.jsx"

export default function Intro() {
    return (
      <>
        <Header />
        <div className="hero-image">

            <div className="content" style={{background: "rgba(0,0,0,0.3)"}}>
            <h2>You got the travel plans, we got the travel vans.</h2>
            <p>
                Add adventure to your life by joining the #vanlife movement. Rent
                the perfect van to make your perfect road trip.
            </p>
            <button className="button">Find your van</button>
            </div>
        </div>

        <p className="footer">© 2022 #VANLIFE</p>
      </>
    );
}