import {Link} from 'react-router-dom'
import './index.css'
import {FaUser} from 'react-icons/fa'

const renderVolunteerDetails = () => (
  <div className="portfolio-container">
    <header>
      <h1>Volunteer Portfolio</h1>
      <p>
        Welcome to my volunteer portfolio! Here you can learn more about my
        experience, skills, and interests.
      </p>
      <img
        src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?t=st=1708663494~exp=1708667094~hmac=571b3948fc358d809f50f180d2c903b24beebbe543c4ce8e9c62778e344b5cf7&w=740"
        className="user-icon"
      />
    </header>
    <section className="profile-section">
      <h2>Profile</h2>
      <div className="profile-info">
        <h3>Name: John Doe</h3>
      </div>
    </section>

    <section className="contact-section">
      <h2>Contact Information</h2>
      <p>Email: johndoe@example.com</p>
      <p>Phone: 123-456-7890</p>
      {/* Wrap the button inside a Link component */}
      <Link to="/contact">
        <button className="contact-button">Contact Now</button>
      </Link>
    </section>
    <footer>
      <p>&copy; 2024 Volunteer Portfolio. All rights reserved.</p>
    </footer>
  </div>
)

const VolunteerDetails = () => (
  <div className="volunteer-details">
    {/* Wrap the whole content in a Link component */}
    <Link to="/details" className="link">
      {renderVolunteerDetails()}
    </Link>
  </div>
)

export default VolunteerDetails
