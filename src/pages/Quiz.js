import { useParams } from "react-router-dom"
import React from "react"
const Quiz = () => {
  const { id } = useParams()
  return <h2>{id}</h2>
}

export default Quiz
