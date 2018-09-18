import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class Menu extends React.Component {
  state = { menu_items: [] }

  componentDidMount() {
    axios.get('/api/menu_items')
    .then( res => this.setState({ menu_items: res.data}) )
  }

  render() {
    const { menu_items } = this.state
    return (
        <ul>
          { menu_items.map( d => 
            <li key={d.id}>
            <Link to={`/menu_items/${d.id}`}>
              {d.menu_item}
            </Link>
            </li>
            )
          }
        </ul>
      )
    }
}

export default Menu