import { SiYourtraveldottv } from "react-icons/si";

function Navbar() {
  return (
    <>
      <nav className="nav-container">
        <SiYourtraveldottv className="logo" />

        <ul className="menu">
          <li className="menu-item">Destinations</li>
          <li className="menu-item">About</li>
          <li className="menu-item">Contact</li>
          <button className="sign-up">Sign Up</button>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
