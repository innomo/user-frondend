import axios from 'axios';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function AddUser() {
// const [user, setUser] = useState({firstName:'',lastName:'',email:'',department:''});
// const [firstName,lastName,email,department]=user;
let navigate = useNavigate()

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


const saveUser = async(e)=>{
    e.preventDefault()
    await axios.post('http://localhost:8080/users',user)
    navigate("/view-users")
}

  return (
    <div className='col-sm-8 py-2 px-5 offset-2 shadow'>
        <form onSubmit={e=>saveUser(e)}>
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

export default AddUser