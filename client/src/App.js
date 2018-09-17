import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Main from './components/Main'
import Details from './components/Details'

const App = () => (
<Fragment>
  <Route exact path="/" component={Main} />
  <Route exact path="/details" component={Details} />
</Fragment>
)

export default App