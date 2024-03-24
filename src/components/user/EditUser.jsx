import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

function EditUser() {
// const [user, setUser] = useState({firstName:'',lastName:'',email:'',department:''});
// const [firstName,lastName,email,department]=user;
let navigate = useNavigate()

const {id} = useParams()

const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
});
const {
    firstName,
    lastName,
    email,
    department,
} = user;

const onChangeInput = (e) => {
    setUser({
        ...user,
        [e.target.name]: e.target.value,
    });
};

// const onChangeInput = (e)=>{
//     setUser({ ...user,[e.target.name]:e.target.value })
// }


const updateUser = async(e)=>{
    e.preventDefault()
    getUser()
    await axios.put(`http://localhost:8080/users/${id}`,user)
    navigate("/view-users")
}
useEffect(() => {
    getUser();
}, []);

const getUser = async()=>{
    const response = await axios.get(`http://localhost:8080/users/${id}`);
    console.log(response.data)
    setUser(response.data);
  }

  return (
    <div className='col-sm-8 py-2 px-5 offset-2 shadow'>
        <h2 className="mt5">Edit User</h2>
        <form onSubmit={e=>updateUser(e)}>
            <div className="input-group mb-5">
                <label className='input-group-text ' htmlFor="firstName">First Name</label>
                <input type="text" value={firstName} onChange={e=>onChangeInput(e)} required id='firstName' name='firstName' className="form-control col-sm-6" />
            </div>
            <div className="input-group mb-5">
                <label className='input-group-text ' htmlFor="lastName">Last Name</label>
                <input type="text" value={lastName} onChange={e=>onChangeInput(e)} required id='lastName' name='lastName' className="form-control col-sm-6" />
            </div>
            <div className="input-group mb-5">
                <label className='input-group-text ' htmlFor="email">Email</label>
                <input type="text" value={email} onChange={e=>onChangeInput(e)} required id='email' name='email' className="form-control col-sm-6" />
            </div>
            <div className="input-group mb-5">
                <label className='input-group-text ' htmlFor="department">Department</label>
                <input type="text" value={department} onChange={e=>onChangeInput(e)} required id='department' name='department' className="form-control col-sm-6" />
            </div>
            <div className="row mb-5  d-flex justify-content-around ">
					<div className="col-sm-2">
						<button
							type="submit"
							className="btn btn-outline-success ">
							Save
						</button>
					</div>

					<div className="col-sm-2 ">
						<Link
							to={"/view-users"}
							type="submit"
							className="btn btn-outline-warning ">
							Cancel
						</Link>
					</div>
			</div>
        </form>
    </div>
  )
}

export default EditUser