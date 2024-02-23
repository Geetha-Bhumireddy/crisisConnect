import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import MapContainer from './components/MapContainer'
import Dashboard from './components/Dashboard'
import VolunteerDetails from './components/VolunteerDetails'
import ContactsContainer from './components/ContactsContainer'
import LoginForm from './components/LoginForm'
import DisasterReportForm from './form.jsx'
import './App.css'

const App = () => (
  <DisasterReportForm />
)

export default App
