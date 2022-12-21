import React from 'react'

export const Children = ({ name }) => {
  function presButton() {
    alert(`Default text`)
  }
  
  function pressButtonParams() {
    alert(`text: ${text}`)
  }
  
  return (
    
    <div><p onMouseOver={() => console.log("On Mouse Over")}> Child Component </p>
    
      <button onClick={() => console.log("boton 1 pulsado")}>
        Boton 1
      </button>

      <button onClick={presButton}>
        Boton 2
      </button>

      <button onClick={() => pressButtonParams('Hello')}>
        Boton 3
      </button>


    </div>
  )
}

export default Children;
