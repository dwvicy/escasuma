import React from "react"
import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <div>
      <main>
        <h2 className="h2b">Escasuma</h2>
        <p className="p2b">
          Your personal memey stylist. <br></br>Find your style in seconds. Shop on
          Myntra. Dazzle every occasion.
        </p>
      </main>
      <div className="inline">
        <div className="containz">
          <Link to="/quiz">Take your meme test</Link>
        </div>
      </div>
    </div>
  )
}

export default Landing
