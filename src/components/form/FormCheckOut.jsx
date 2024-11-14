
import React, { useState } from 'react'

const FormCheckOut = () => {

  const [userData, setUserData] = useState({ name: "", lastName: "" })

  const handleSubmit = (event) => {
    event.preventDefault()
    setUserData(...userData.name)
    setUserData(...userData.lastName)
    console.log("Su nombre completo es: " + userData.name + " " + userData.lastName)
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text"
          placeholder='Ingrese su nombre'
          name='name'
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          value={userData.name} />
        <input
          type="text"
          placeholder='Ingrese su Apelido'
          name='lastName'
          onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
          value={userData.lastName} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  ) 
}

export default FormCheckOut