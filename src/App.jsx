import { useState,useEffect } from "react"



function App() {

const [actress,setActress] = useState([])
const api = "https://lanciweb.github.io/demo/api/actresses/"


useEffect(()=>{
  console.log("useEffect Test");

  fetch(api)
  .then(res => res.json())
  .then(actress => {
    console.log(actress);
    setActress(actress)
    
  })
},[])




  return (
    <>
     <h1> Actors and Actress list</h1>
     <div>
      <ul>
        {actress.map((actress)=>(
          <li key={actress.id}>{actress.name}</li>
        ))}
      </ul>
     </div>
    </>
  )
}

export default App
