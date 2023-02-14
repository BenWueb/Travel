import Navbar from "../components/Navbar";
import { useEffect } from "react";
import {
  FaAngleDoubleDown,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaUserAlt,
  FaEnvelope,
  FaSquare,
  FaBookmark,
  FaGlobeAmericas,
  FaPlane,
} from "react-icons/fa";

function Main() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const text = entry.target.querySelector("#cta-anime");
        const header = entry.target.querySelector("#header-anime");

        if (text && entry.isIntersecting) {
          text.classList.add("text-animation");
          return;
        } else if (text) {
          text.classList.remove("text-animation");
        }
        if (header && entry.isIntersecting) {
          header.classList.add("heading-animation");
          return;
        } else if (header) {
          header.classList.remove("heading-animation");
        }
      });
    });

    observer.observe(document.querySelector(".cta-anime-wrapper"));
    observer.observe(document.querySelector(".header-anime-wrapper"));
  }, []);

  return (
    <div>
      <div className="container">
        <section className="header-container">
          <Navbar className="navbar" />
          <div className="header-content-container">
            <div className="cta-anime-wrapper">
              <h1 id="cta-anime">Effortless exploration on every continent</h1>
            </div>
            <p>Trips of a lifetime. Planned to perfection. Adventure awaits.</p>
            <div className="button-container">
              <button className="btn">Browse Trips</button>
              <button className="btn cta-btn">Book Now</button>
            </div>
          </div>
          <h2>Scroll Down</h2>
          <FaAngleDoubleDown className="down-arrow" />
        </section>

        <section className="destinations">
          <div className="header-anime-wrapper">
            <h1 id="header-anime">Popular Destinations</h1>
          </div>
          <div className="destination-container">
            <div className="card" id="card">
              <div className="card-img">
                <img
                  src="https://images.unsplash.com/photo-1542259009477-d625272157b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
                  alt=""
                />
              </div>
              <div className="card-content">
                <h2>Maui</h2>

                <p className="card-description">
                  Maui, known also as “The Valley Isle,” is the second largest
                  Hawaiian island. The island beloved for its world-famous
                  beaches.
                </p>
              </div>
              <button className="card-btn">View Trip</button>
            </div>
            <div className="card" id="card">
              <div className="card-img">
                <img
                  src="https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt=""
                />
              </div>
              <div className="card-content">
                <h2>Thailand</h2>

                <p className="card-description">
                  Thailand has emerged as one of the most visited tourist
                  destinations in the world. Known for its tranquil beaches,
                  exotic cuisine, magnificent temples
                </p>
              </div>
              <button className="card-btn">View Trip</button>
            </div>
            <div className="card" id="card">
              <div className="card-img">
                <img
                  src="https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aXRhbHl8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60"
                  alt=""
                />
              </div>
              <div className="card-content">
                <h2>Italy</h2>

                <p className="card-description">
                  Italy is a country famous not only for its glorious
                  landscapes, rich history and vibrant culture, but also for the
                  Italian divine food that is a perfect fit for everyone.
                </p>
              </div>
              <button className="card-btn">View Trip</button>
            </div>
            <div className="card" id="card">
              <div className="card-img">
                <img
                  src="https://images.unsplash.com/photo-1508971607899-a238a095d417?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
                  alt=""
                />
              </div>
              <div className="card-content">
                <h2>New Zealand</h2>

                <p className="card-description">
                  New Zealand has a dazzling wealth of breathtaking scenery,
                  friendly and fun-loving people, plenty of things to see and
                  do, mouthwatering food and wine.
                </p>
              </div>
              <button className="card-btn">View Trip</button>
            </div>
          </div>
        </section>

        <section className="about-us">
          <h1>About Us</h1>
          <div className="about-us-container">
            <div className="about-us-text">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Cupiditate nam ullam consequuntur quis excepturi illo quasi quod
                dolorem atque fugit dolor, nobis necessitatibus magni illum
                doloremque nostrum dolores saepe minima nisi veniam accusamus
                molestiae? Eius vitae ullam dolore eum reprehenderit officia
                minus quae! Totam dolorem minima voluptas rerum et quasi?
              </p>
              <div className="stats-container">
                <div className="stat">
                  <h4>1.4m</h4>
                  <p>Trips Booked</p>
                  <FaBookmark className="about-icon" />
                </div>
                <div className="stat">
                  <h4>500k</h4>
                  <p>Customers Worldwide</p>
                  <FaGlobeAmericas className="about-icon" />
                </div>
                <div className="stat">
                  <h4>5m+</h4>
                  <p>Miles Traveled</p>
                  <FaPlane className="about-icon" />
                </div>
              </div>
            </div>
            {/* <div className="image-container">
              <img
                src="https://images.unsplash.com/photo-1530477765758-9fa34af23dad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0JTIwYm9hcmR3YWxrfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=2000&q=60"
                alt=""
              />
            </div> */}
          </div>
        </section>

        <section className="contact-us">
          <div className="contact-us-container">
            <div className="form-container">
              <h1>Contact Us</h1>
              <form className="form">
                <label htmlFor="fname">First Name</label>
                <div className="input-wrapper">
                  <input type="text" id="fname" />
                  <FaUserAlt className="input-icon" />
                </div>
                <label htmlFor="lname">Last Name</label>
                <div className="input-wrapper">
                  <input type="text" id="lname" />
                  <FaUserAlt className="input-icon" />
                </div>
                <label htmlFor="email">Email</label>
                <div className="input-wrapper">
                  <input type="email" id="email" />
                  <FaEnvelope className="input-icon" />
                </div>
                <button className="submit-btn">Submit</button>
              </form>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-links-container">
              <p>Terms of Use</p>
              <p>Privacy Policy</p>
            </div>

            <div className="footer-copyright-container">
              &copy; 2023 Travel LLC
            </div>
            <div className="footer-socials-container">
              <div className="footer-social-container">
                <div className="icon-container">
                  <a href="" target="_blank">
                    <FaInstagram className="icon" />
                  </a>
                </div>
              </div>
              <div className="footer-social-container">
                <div className="icon-container">
                  <a href="" target="_blank">
                    <FaFacebookF className="icon" />
                  </a>
                </div>
              </div>
              <div className="footer-social-container">
                <div className="icon-container">
                  <a href="">
                    <FaTwitter className="icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default Main;
