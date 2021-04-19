import React from "react"
import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <div>
      <h2 className="h2b">Escasuma</h2>
      <p className="p2b">
        Your personal memey stylist. <br></br>Find your style in seconds. Shop on
        Myntra. Dazzle every occasion.
      </p>

      <div className="inline">
        <div className="containz">
          <Link to="/quiz">Find your style, take the quiz!</Link>
        </div>
      </div>
    </div>
  )
}

export default Landing
