import React, { Component, useEffect } from 'react'

export  class WillUnMount extends Component {
  
  componentWillUnMount() {
    console.log("comportamiento antes de que el componente desaparezca")
  }

    render() {
    return (
      <div>
        <h1>WillUnMount</h1>
        </div>
    )
  }
}


const WillUnMountHook = () => {

    useEffect(() => {
      return () => {
        console.log("comportamiento cuando el componente recibe nuevos props o cambios en su estado")
      };
      
    }, [])
    

  return (
    <div>
        <h1>WillUnMount</h1>
    </div>
  )
}

