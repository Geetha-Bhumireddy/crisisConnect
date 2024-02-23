import {Link} from 'react-router-dom'
import Charts from '../Charts'
import DonutChart from '../DonutChart'
import SearchItem from '../SearchItem'

import './index.css'

const Home = () => (
  <div className="bg-container">
    <div className="side-bar-bg-container">
      <div>
        <div className="align-side-bar">
          <h2>User Profile</h2>
        </div>

        <img
          src="https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
          className="side-bar-profile"
        />

        <div>
          <Link to="/dashboard">
            <h3>Dashboard</h3>
          </Link>

          <hr />
          <h3>Report Disaster</h3>
          <hr />
          <Link to="/register">
            <h3>Volunteer Registration</h3>
          </Link>

          <hr />
          <a href="https://www.google.com/maps/" rel="noopener noreferrer">
            <h3>Maps</h3>
          </a>

          <hr />
          <h3>Funds</h3>
          <hr />
          <h3>Rewards</h3>
        </div>
      </div>
      <div>
        <DonutChart />
        <div className="chart-container">
          <Charts />
        </div>
      </div>
    </div>
    <div className="search-list-bg-container">
      <SearchItem />
    </div>
  </div>
)

export default Home
