import { useState } from "react"
import Header from "./components/Header"
import Parameters from "./components/Parameters"
import Results from "./components/Results"

function App() {
  const [ params, setParams ] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })

  const paramsAreValid = params.duration >= 1

  function changeParams(event, param) {
    const value = parseFloat(event.target.value)
    const newParams = {...params,  [param]: value}

    setParams(newParams)
  }

  return <>
    <Header />
    <Parameters params={params} changeParams={ changeParams } />
    
    { !paramsAreValid && <p className="center">Please enter a duration greater than 0.</p> }
    { paramsAreValid && <Results params={params} /> }
  </>
}

export default App
