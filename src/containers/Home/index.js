import React, {  useState, useRef, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import H1 from '../../components/title'
import ContainerItens from '../../components/ContainerItens'
import {
  Container,
  Image,
  Button,
  Input,
  InputLabel,
} from '../Home/style'
import People from '../../assets/people.svg'
import Arrow from '../../assets/arrow.svg'




function App() {

  const [users, setUsers] = useState([])
  const InputName = useRef()
  const inputAge = useRef()
  const history = useHistory()

  async function addNewUser(){
    const {data: newUser} = await axios.post('http://localhost:3001/users', {
      name: InputName.current.value, 
      age: inputAge.current.value,
    })

    setUsers([ ...users, newUser ]) 
    history.push('/usuarios')
  }


  return (
    <Container>
      <Image src={People}></Image>
      <ContainerItens>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={InputName}></Input>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge}></Input>

        <Button onClick={addNewUser}> Cadastrar <img src={Arrow}></img>
        
        </Button>

      </ContainerItens>
    </Container>
  )

}

export default App