import react, {  useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import H1 from '../../components/title'
import ContainerItens from '../../components/ContainerItens'
import {
  Container,
  Image,
  Button,
  Users,
} from '../users/style'
import Profile from '../../assets/profiles.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'


function User() {

  const [users, setUsers] = useState([])
  const history = useHistory()

  useEffect(()=>{
    async function fetchUser(){
    const {data} =  await axios.get('http://localhost:3001/users')
    setUsers(data.users)
    }

    fetchUser()
  }, [users])

  async function deleteUser(userid){
    await axios.delete(`http://localhost:3001/users/${userid}`)
    const newUsers = users.filter((user) => user.id !== userid)
    setUsers(newUsers)
  }

  function goBackPage(){
    history.push('/')
  }


  return (
    <Container>
      <Image src={Profile}></Image>
      <ContainerItens isBlur={true}>
        <H1>Usuários</H1>

        <ul>
          { users.map((user) =>(
            
            <Users key={user.id}>
              <p>{user.name}</p>  <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}> <img src={Trash}></img></button>
              </Users>
              
            ))}
        </ul>

        <Button onClick={goBackPage}> <img src={Arrow}/>
         Voltar 
        </Button>

      </ContainerItens>
    </Container>
  )

}

export default User