import React, { useEffect,useState } from 'react'
import instance from './axios'
import { Table,tbody,thead } from 'react-bootstrap';

function Home() {

  const [users,setUsers] = useState([])

  useEffect(() =>{
    instance.get('/users')
    .then((res)=>setUsers(res.data))
    .catch(err => alert(err))
     
    },[]);

  console.log(users);

  return (
    <div>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>User Name</th>
         
          <th>Phone</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
        {users&&users.map((user)=>(
          <tr>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.phone}</td>
          <td>{user.website}</td>
        </tr>

        ))}
        
      
      </tbody>
    </Table>
     
    </div>
  )
}

export default Home
