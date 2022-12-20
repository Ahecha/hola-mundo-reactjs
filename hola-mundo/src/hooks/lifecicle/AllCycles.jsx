import React, {useEffect} from 'react'

const AllCycles = () => {

    useEffect(() => {
        console.log("componente creado")

            const intevalID = setInteval(() => {

                document.title= `${new Date()}`
                console.log("acutalizar version del componente")
            }, 1000)

        return () => {
          console.log("componente va a desaparecer")
          document.title= "el tiempo se ha detenido"
          clearInterval(intevalID);
        };
        
      }, [])
    

  return (
    <div>
        <h1>DidMount</h1>
    </div>
  )
}