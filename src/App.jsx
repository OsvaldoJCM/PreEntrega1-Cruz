import React from 'react'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemCount from './componentes/ItemCount/ItemCount'
import Vista from './componentes/Vista/Vista'
import Navbar from './componentes/Navbar/Navbar'
const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Dolares vengan a mi" />
    </>
  )
}

export default App