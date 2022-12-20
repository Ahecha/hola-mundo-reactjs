import React, { Component, useEffect} from 'react'; 

export class Didmount extends Component {
   
   componentDidMount() {
    console.log("comportamiento antes de que el componente sea añadido al DOM")
   }
   
    render() {
        return (
            <div>
            <h1>DidMount</h1>
            </div>
        )
    }
}


const DidMountHook = () => {

    useEffect(() => {
      console.log("comportamiento antes de que el componente sea añadido al DOM")
      
    }, [])
    

  return (
    <div>
        <h1>DidMount</h1>
    </div>
  )
}
