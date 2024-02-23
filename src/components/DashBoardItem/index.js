import {useHistory} from 'react-router-dom'
import './index.css'

const DashBoardItem = props => {
  const history = useHistory()
  const {volDetails} = props
  const {name, email, phNum, address, id, Location} = volDetails

  const handleClick = () => {
    // Navigate to a different page
    history.push('/details')
  }

  return (
    <tr onClick={handleClick}>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phNum}</td>
      <td>{address}</td>
      <td>{Location}</td>
    </tr>
  )
}

export default DashBoardItem
