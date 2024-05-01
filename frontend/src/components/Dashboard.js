import React, { useEffect, useState } from 'react'
import {useForm} from "react-hook-form";
import {useDispatch,useSelector} from "react-redux"
import { registerAction } from '../actions/userAction';
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import Search from './Search';
const AddNewUser = ({NewUserOpen})=>{
    const dispatch = useDispatch();
    const {register,handleSubmit,formState:{errors}} = useForm();
    const [userdata,setUserdata] = useState({
         username:"",
         email:"",
         password:""
    });


    const onChange = (e)=>{
       setUserdata({...userdata,[e.target.name]:e.target.value})
    }
    const onSubmit = ()=>{
      const Role = "user";

     const formData = {
         username:userdata.username,
         email:userdata.email,
         password:userdata.password,
         role:Role
     };

     dispatch(registerAction(formData))
     }
   return(
       <div className=' admin-add-new-user'>
         <div className='container-md'>                                                
           <div className='row'>
           <div className='col-md-6'>                        
               <form onSubmit={handleSubmit(onSubmit)} className='p-2 border-bottom'>
                   <div className='d-flex justify-content-between align-items-center'>
                     <h3 className='text-white'>Register</h3>           
                      <button className='fs-3 p-1 bg-trans text-white' onClick={NewUserOpen}>X</button>
                  </div>      
                   <label htmlFor='username' className='text-white fs-5 py-3'>Enter Username</label>
                   <input type='text'
                     placeholder='username....'
                     className='form-control'
                     name='username'
                     {...register("username",{required:true})}
                     onChange={onChange}
                   />      
                   {errors.username && <p className='text-danger'>username is required.</p>}  
                  <label htmlFor='username' className='text-white fs-5 py-3'>Enter Email</label>
                   <input type='email'
                     placeholder='email....'
                     className='form-control'
                     required
                     name='email'
                     {...register("email",{required:true})}
                     onChange={onChange}
                   /> 
                  {errors.email && <p className='text-danger'>email is required.</p>}  
                  <label htmlFor='username' className='text-white fs-5 py-3'>Enter Password</label>
                   <input type='password'
                     placeholder='password....'
                     className='form-control'
                     name='password'
                     {...register("password",{required:true})}
                     onChange={onChange}
                   /> 
                  {errors.password && <p className='text-danger'>username is required.</p>}  
                   <div className='d-flex justify-content-center align-items-center p-2'>
                   <input className='btn btn-primary' type='submit' />             
                   </div>
               </form>
               </div>    
           </div>
           </div>     
       </div>                            
   )
}
// Admin create
const AdminNew = ({adminopen})=>{
  const dispatch = useDispatch();
  const {register,handleSubmit,formState:{errors}} = useForm();
  const [userdata,setUserdata] = useState({
       username:"",
       email:"",
       password:""
  });


  const onChange = (e)=>{
     setUserdata({...userdata,[e.target.name]:e.target.value})
  }
  const onSubmit = ()=>{
    const Role = "admin";

   const formData = {
       username:userdata.username,
       email:userdata.email,
       password:userdata.password,
       role:Role
   };

   dispatch(registerAction(formData))
   }
 return(
     <div className=' admin-add-new-user'>
       <div className='container-md'>                                                
         <div className='row'>
         <div className='col-md-6'>                        
             <form onSubmit={handleSubmit(onSubmit)} className='p-2 border-bottom'>
                 <div className='d-flex justify-content-between align-items-center'>
                   <h3 className='text-white'>Register Admin</h3>           
                    <button className='fs-3 p-1 bg-trans text-white' onClick={adminopen}>X</button>
                </div>      
                 <label htmlFor='username' className='text-white fs-5 py-3'>Enter Username</label>
                 <input type='text'
                   placeholder='username....'
                   className='form-control'
                   name='username'
                   {...register("username",{required:true})}
                   onChange={onChange}
                 />      
                 {errors.username && <p className='text-danger'>username is required.</p>}  
                <label htmlFor='username' className='text-white fs-5 py-3'>Enter Email</label>
                 <input type='email'
                   placeholder='email....'
                   className='form-control'
                   required
                   name='email'
                   {...register("email",{required:true})}
                   onChange={onChange}
                 /> 
                {errors.email && <p className='text-danger'>email is required.</p>}  
                <label htmlFor='username' className='text-white fs-5 py-3'>Enter Password</label>
                 <input type='password'
                   placeholder='password....'
                   className='form-control'
                   name='password'
                   {...register("password",{required:true})}
                   onChange={onChange}
                 /> 
                {errors.password && <p className='text-danger'>username is required.</p>}  
                 <div className='d-flex justify-content-center align-items-center p-2'>
                 <input className='btn btn-primary' type='submit' />             
                 </div>
             </form>
             </div>    
         </div>
         </div>     
     </div>                            
 )
}
const Dashboard = () => {
  const navigate = useNavigate();
  const [userData,setUserData] = useState([]);
   const [addnewuser,setAddnewuser] = useState(false); 
   const [newadmin,setNewadmin] = useState(false);
   const {isAuthenticated} = useSelector((state) => state.searchState);
   const NewUserOpen = ()=>{
       setAddnewuser(!addnewuser)
   }
   const adminopen = ()=>{
       setNewadmin(!newadmin)
   }
useEffect(()=>{
  const getALluser = async()=>{
   const {data} = await axios.get(`/api/v1/getallusers`);

    setUserData(data.userOnly)
}
getALluser()
   
},[])
   const deleteUser = async(id)=>{
       const {data} =await axios.delete(`/api/v1/user/delete/${id}`)
        if(data.success){
         setTimeout(()=>{
          window.location.href("/dashboard");
         },150)
        }
   }
  return (
    <div className='dashboard container-fluid '>
         {addnewuser?<AddNewUser NewUserOpen={NewUserOpen} />:""}  
         {newadmin ?<AdminNew  adminopen={adminopen} />:""}                        
          <Search searchBox={(resolve)=>setUserData(resolve)} adminopen={adminopen} NewUserOpen={NewUserOpen}   />
        {/* user show table */}
      <div className='container-md mt-3 table-responsive'>
        <table className='table table-hover'>
            <thead>
                 <tr>
                    <th>NO:</th>
                    <th>Username</th>
                    <th>Email</th>       
                    <th>Delete</th>        
                 </tr>                  
            </thead>     
            <tbody>
               {
                userData && userData.map((item,index)=>(
                  <tr key={item._id}>
                  <td>{index+1}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>
                      <div className='d-flex align-items-center'>
                         <button className='btn' onClick={()=>deleteUser(item._id)}> <i className='fa fa-trash text-danger'></i></button>
                          <span className='ps-1'>delete</span>       
                      </div>           
                  </td>              
                </tr>  
                ))
               }
               
           </tbody>                  
        </table>
        </div>  
    </div>
  )
}

export default Dashboard