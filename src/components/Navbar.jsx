import { SiYourtraveldottv } from "react-icons/si";
import { useState, useEffect } from "react";

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return (
    <>
      <nav className="nav-container">
        <SiYourtraveldottv className="logo" />

        <ul className="menu">
          {windowWidth > "430" && (
            <>
              <li className="menu-item">Destinations</li>
              <li className="menu-item">About</li>
              <li className="menu-item">Contact</li>
            </>
          )}
          <button className="sign-up">Sign Up</button>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
