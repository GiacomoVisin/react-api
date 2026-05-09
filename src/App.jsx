import { useState, useEffect } from "react"



function App() {

  const [actress, setActress] = useState([])
  const [actors, setActors] = useState([])
  const api = "https://lanciweb.github.io/demo/api/actresses/"
  const api2 = "https://lanciweb.github.io/demo/api/actors/"


  useEffect(() => {
    console.log("useEffect Test");

    fetch(api)
      .then(res => res.json())
      .then(actress => {
        console.log(actress);
        setActress(actress)

      })
  }, [])


  useEffect(() => {
    fetch(api2)
      .then(res => res.json())
      .then(actress => {
        console.log(actors);
        setActors(actors)

      })
  }, [])




  return (
    <>
      <h1> Actors and Actress list</h1>
      <div>
        <ul>
          {actress.map((actress) => (
            <li key={actress.id}>{actress.name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
