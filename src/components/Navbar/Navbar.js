import { useState,useEffect  } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import Lottie from 'react-lottie';
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  const [animationData, setAnimationData] = useState(null);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
}
useEffect(() => {
    // Fetch the animation data from the provided URL
    fetch('https://lottie.host/718e1b66-d3d9-4fc5-a733-64e4129fdaf7/QRKXHs48pN.json')
      .then((response) => response.json())
      .then((data) => {
        setAnimationData(data);
      })
      .catch((error) => {
        console.error('Error fetching animation data:', error);
      });
  }, []);
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

    return (
      <nav className="navbar">
        <div className="container">
        <div className="logo flex items-center space-x-2">
          {animationData && (
            <Lottie options={lottieOptions} height={40} width={40} /> /* Lottie animation */
          )}
          <span className="brand-name">ANVIK FARMS</span> {/* Brand name */}
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>        
            <ul>
              <li>
                <NavLink to="/">HOME</NavLink>
              </li>
              <li>
                <NavLink to="/blog">BLOG</NavLink>
              </li>
              <li>
                <NavLink to="/about">ABOUT</NavLink>
              </li>
              <li>
                <NavLink to="/contact">CONTACT</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
export default Navbar