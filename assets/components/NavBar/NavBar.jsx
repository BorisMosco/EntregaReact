import "./NavBar.css"
import img from "./jana-logo.png"
import CartWidget from "./CartWidget/CartWidget"


const NavBar = () => {
    return (
      <nav className="NavBar">
          
          <div className="logo">
            <img src={img} alt="logo" />
          </div>
          <ul>
              <li>Products</li>
              <li>FAQs</li>
              <li>About us</li>
          </ul>
          <div className="CartWidget">
            <CartWidget/>
          </div>
      </nav>
    )
  }
  
  export default NavBar

