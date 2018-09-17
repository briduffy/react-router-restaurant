import React from 'react'
import { Route } from 'react-router-dom'
import Main from './components/Main'

const App = () => (
  <Route exact path="/" component={Main} />
)

export default App