import { useState } from "react";


function App() {
  const [name , setName]=useState('');
  const [email , setEmail]=useState('');
  const [address , setAddress]=useState('');

  const [users , setUsers]=useState([]);

  const [edit , setEdit]=useState(false);
  const [active , setActive]=useState(null)

  const addUser= (e) =>{
    e.preventDefault();
    const user ={
      name: name,
      email: email,
      address : address
    }
    if(edit){
      //update user
      let copy = users;
      Object.assign(copy[active], user)//for update
      setUsers([...copy])
      setEdit(false)
      setActive(null)
    }else{
      //add user
      setUsers([...users, user]);

    }
    setAddress('');
    setEmail('');
    setName('');
  }
  const onEditClick = (index)=>{
        const user = users[index];

        setName(user.name)
        setEmail(user.email)
        setAddress(user.address)

        setActive(index)

        setEdit(true)


  }
 // const upDateUser = ()=>{

 // }
  const deleteUser = (user)=>{
  
    if(window.confirm('are you sure you want to delete ?')){
      let copy = users.filter(item => item !== user);
      setUsers([...copy])
    }
   

  }


  return (
    <div>
     <h1>Crud Operation</h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xs-12 col-sm-10 col-md-8 col-lg-5">
            <form onSubmit={addUser}>
              <div className="form-group">
                <label>Name</label>
                <input type='text' className='form-control' value={name} onChange={(e) => {setName(e.target.value)}}></input>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type='email' className='form-control'  value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
              </div>
              <div className="form-group">
                <label>Address</label>
                <input type='text' className='form-control'  value={address} onChange={(e) => {setAddress(e.target.value)}}></input>
              </div>
              <br></br>
              <button className="btn btn-primary form-control"> {edit ? "Update":"Add"}</button>
            </form> 
          </div>
          <br></br>
 
          <table className="table table-bordered mt-5">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
                <tbody>
                 {users.map((user , index) => {
                 return(
                 <tr>
                   <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                    <td><button className="btn btn-info" onClick={(e)=>onEditClick(index)}>Edit</button></td>
                    <td><button className="btn btn-danger" onClick={()=>{deleteUser(user)}}>Delete</button></td>
                </tr>); 
                 })} 
                </tbody>
             
            </table>
        </div>
      </div>
    </div>
  );
}

export default App;
