import "./App.css"
import Quiz from "./pages/Quiz"
import Landing from "./pages/Landing"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import React from "react"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/quiz/:id">
          <Quiz />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
