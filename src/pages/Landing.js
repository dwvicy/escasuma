import { Link } from "react-router-dom"
import React from "react"

const Landing = (props) => {
  const id = props
  return (
    <div>
      <h2>hi!</h2>

      <Link to={`/quiz/${id}`} className="pet" />
    </div>
  )
}

export default Landing
