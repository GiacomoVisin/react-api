import { useState, useEffect } from "react"
import Card from "./components/Card"



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
      .then(actors => {
        console.log(actors);
        setActors(actors)

      })
  }, [])




  return (
    <>
      <h1 className="mb-3"> Actress list</h1>
      <div className="container">
        <div className="row">
          {actress.map((actress) => (
            <div className="col col-lg-4 col-md-6 col-sm-6">
              <Card key={actress.id} actress={actress} />
            </div>
          ))}
        </div>
      </div>


      <hr />

      <h2> Actors list</h2>

         <div className="container">
        <div className="row">
          {actors.map((actors) => (
            <div className="col col-lg-4 col-md-6 col-sm-6">
              <Card key={actors.id} actress={actors} />
            </div>
          ))}
        </div>
      </div>
    </>
  )




  

}

export default App
