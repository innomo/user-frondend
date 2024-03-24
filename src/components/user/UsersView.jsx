import {useState,useEffect} from 'react';
import axios from "axios";
import {FaEye, FaTrashAlt} from 'react-icons/fa'
import { FaPenToSquare } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function UsersView() {
  
  const[users,setUsers]=useState([]);

  useEffect(() => {
    loadUsers();
  }, [])
  

  const loadUsers = async()=>{
    const response = await axios.get('http://localhost:8080/users');
    setUsers(response.data);
  }

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/users/${id}`)
    loadUsers()
  }

  const handleEdit = async (id) => {
    await axios.put(`http://localhost:8080/users/${id}`)
    
  }

  return (
    <div className="container">
        <table className="table table-bordered table-hover shadow">
          <thead className='table-light'>
            <tr className="text-center">
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Department</th>
              <th colSpan="3">Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {users.map((user,index)=>(
              <tr key={user.id}>
              <th scope='row' key={index}>{index + 1}</th>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.firstName}</td>
              <td>{user.email}</td>
              <td className="mx-2">
              <Link to={`/view-user/${user.id}`} className="btn btn-info "><FaEye/></Link>
                </td>
              <td className="mx-2">
              <Link to={`/edit-user/${user.id}`} className="btn btn-warning "><FaPenToSquare/></Link>
              </td>
              <td className="mx-2">
              <button className="btn btn-danger " onClick={()=>handleDelete(user.id)}><FaTrashAlt/></button>
              </td>
            </tr>
            ))}
            
          </tbody>
        </table>
    </div>
  )
}

export default UsersView