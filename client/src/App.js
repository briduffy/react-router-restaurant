import React, { Fragment} from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from './components/Main'
import Details from './components/Details'
import NoMatch from './components/NoMatch'
import NavBar from './components/NavBar'
import Menu from './components/Menu'

const App = () => (
<Fragment>
  <NavBar />
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/details" component={Details} />
    <Route exact path="/Menu" component={Menu} />
    <Route component={NoMatch} />
  </Switch>
</Fragment>
)

export default App