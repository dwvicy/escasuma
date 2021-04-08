import "./App.css"
import Quiz from "./pages/Quiz"
import Landing from "./pages/Landing"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import React, { Component } from "react"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
      questionId: 1,
      question: "",
      answerOptions: [],
      answer: "",
      answersCount: {},
      result: "",
    }
  }
  render() {
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
}

export default App
