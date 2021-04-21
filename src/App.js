import React from "react"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Gender from "./Gender"
import Landing from "./Landing"
import Quizler from "./Quizler"

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/gen">
            <Gender />
          </Route>
          <Route path="/quiz">
            <Quizler />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
