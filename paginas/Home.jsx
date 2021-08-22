import React from 'react'
import ListaPosts from '../Components/ListaPosts'
import ListaCategoria from '../Components/ListaCategoria'

const Home = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>
      <ListaCategoria/>
      <ListaPosts url={'/posts'}/>
    </main>
  )
}

export default Home
