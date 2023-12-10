import React from 'react'
import Cards from '../Cards/Cards'
import './MainDash.css'
import Table from '../Table/Table'



const MainDash = () => {
  return (
    <div className="MainDash">
            <h1>Dominio Administrador</h1>    
            <Cards/>
            <h2>Cursos Recientes</h2>
            <Table/>
    </div>
  )
}

export default MainDash;