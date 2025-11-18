import logo from "../assets/logo.png"
import "../style/header.css" 
export default function Header(){
    return (
      <>
        <div className="header">
          <div>
            <img src={logo} className="header--logo" />
          </div>
          <div></div>
        </div>
      </>
    );
}