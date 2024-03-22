import { Link } from "react-router-dom"

 function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">Kalvium ❤️</Link>
      <ul>
        <Link to="/contacts">Contacts</Link>
        <Link to="/about">About</Link>
      </ul>
    </nav>
  )
}
export default Navbar;
