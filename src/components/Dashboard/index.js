import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import {BsFilterRight} from 'react-icons/bs'
import DashBoardItem from '../DashBoardItem'
import Header from '../Header'

let data = [
  {id: 1, name: '', email: '', phNum: '', address: '', Location: ''},
  {id: 2, name: '', email: '', phNum: '', address: '', Location: ''},
  {id: 3, name: '', email: '', phNum: '', address: '', Location: ''},
  {id: 4, name: '', email: '', phNum: '', address: '', Location: ''},
  {id: 5, name: '', email: '', phNum: '', address: '', Location: ''},
  {id: 6, name: '', email: '', phNum: '', address: '', Location: ''},
  {id: 7, name: '', email: '', phNum: '', address: '', Location: ''},
  {id: 8, name: '', email: '', phNum: '', address: '', Location: ''},
  {id: 9, name: '', email: '', phNum: '', address: '', Location: ''},
  {id: 10, name: '', email: '', phNum: '', address: '', Location: ''},
  {id: 11, name: '', email: '', phNum: '', address: '', Location: ''},
  {id: 12, name: '', email: '', phNum: '', address: '', Location: ''},
  {id: 13, name: '', email: '', phNum: '', address: '', Location: ''},
]

// Function to generate random data
const generateRandomData = () => {
  const names = [
    'John Doe',
    'Jane Smith',
    'Michael Johnson',
    'Emily Brown',
    'David Wilson',
  ]
  const emails = [
    'john@example.com',
    'jane@example.com',
    'michael@example.com',
    'emily@example.com',
    'david@example.com',
  ]
  const phoneNumbers = [
    '123-456-7890',
    '456-789-0123',
    '789-012-3456',
    '012-345-6789',
    '345-678-9012',
  ]

  const locations = ['Hyderabad', 'Vizag', 'Bihar', 'Delhi', 'Mumbai']
  const addresses = [
    '123 Main St, City',
    '456 Elm St, Town',
    '789 Oak St, Village',
    '012 Maple St, Suburb',
    '345 Pine St, Rural',
  ]

  return data.map(item => ({
    ...item,
    name: names[Math.floor(Math.random() * names.length)],
    email: emails[Math.floor(Math.random() * emails.length)],
    phNum: phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)],
    address: addresses[Math.floor(Math.random() * addresses.length)],
    Location: locations[Math.floor(Math.random() * locations.length)],
  }))
}

data = generateRandomData()

console.log(data)

class Dashboard extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event =>
    this.setState({searchInput: event.target.value})

  render() {
    const {searchInput} = this.state
    const filteredData = data.filter(each =>
      each.Location.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="dashboard-container">
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
              <h3>Dashboard</h3>
              <hr />
              <h3>Report Disaster</h3>
              <hr />
              <Link to="/register">
                <h3>Volunteer Registration</h3>
              </Link>

              <hr />
              <Link to="/maps">
                <h3>Maps</h3>
              </Link>

              <hr />
              <h3>Funds</h3>
              <hr />
              <h3>Rewards</h3>
            </div>
          </div>
        </div>

        <div className="table-bg-container">
          <div className="logout-section">
            <h1>Dashboard</h1>
            <Header />
          </div>

          <div className="search-container">
            <img src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png" />
            <input
              type="text"
              placeholder="Filter..."
              className="search-input"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
          </div>
          <div className="table-container">
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map(each => (
                  <DashBoardItem volDetails={each} key={each.id} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
