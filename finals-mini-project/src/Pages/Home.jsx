import './Home.css'
import { Link } from 'react-router-dom'
export const Home = () => {
  return (
    <>
    <div className="section">
        <div className="hero-text">
          <h1>KeyStaxx</h1>
          <p>Unlock Your Potential, One Keystroke at a Time.</p>
          <Link to='/Products' ><button className="home-button">Browse Products</button></Link>
        </div>
    </div>
    <div className="about-home">
        <h1>About Us</h1>
        <p>KeyStaxx is a premier artisan keyboard company dedicated to redefining the typing experience through unparalleled craftsmanship and design. We specialize in creating unique, high-quality keyboards that merge functionality with artistic expression, catering to enthusiasts and professionals alike. At KeyStaxx, we are passionate about fostering a vibrant community, celebrating individuality, and delivering personalized products that inspire creativity and elevate every keystroke.</p>
     <Link to='/Mission-Vision'><button className="hero-button">Read More</button> </Link>
    </div>

    </>
  )
}