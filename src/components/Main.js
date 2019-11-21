import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Main extends Component {
  render () {
    return (
      <div>
        <ul>
          <li>
            <Link to='/app'>
              <button>app</button>
            </Link>
          </li>
          <li>
            <Link to='/login'>
              <button>login</button>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

Main.propTypes = {}

export default Main
