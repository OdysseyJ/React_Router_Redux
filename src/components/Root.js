import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
import Main from './Main'

const Root = ({ store }) =>
  <Provider store={store}>
    <Router>
      <Route path='/app' component={App} />
      <Route path='/main' component={Main} />
    </Router>
  </Provider>

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
