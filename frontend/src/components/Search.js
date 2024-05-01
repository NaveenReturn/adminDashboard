import React, { useState } from 'react'

const Search = ({searchBox,adminopen,NewUserOpen}) => {

      const [search,setSearch] = useState();
      const onChange = async(e)=>{
          setSearch(e.target.value)                         
         const response = await fetch(`/api/v1/searchuser?query=${e.target.value}`);
         const res = await response.json();
         searchBox(res.filterUser)                       
      }     
      const onClick = async()=>{
         const response = await fetch(`/api/v1/searchuser?query=${search}`);
         const res = await response.json();
         searchBox(res.filterUser)                         
      }                        
  return (
    <div className='container-fluid'>
                <div className='search-menu row'>
            <div className='serach-box col-md-8 p-3'>
                 <div className='d-flex align-items-center'>
                 <input type='search' 
                 placeholder='search........'        
                 className='form-control'           
                 name='search' 
                 onChange={onChange}
                 />
                 <button onClick={onClick} className='btn btn-primary'>
                 <i className='fa fa-search p-1'></i>                
                </button>            
                 </div>
            </div>    
            <div className='col-md-4 p-3'>
               <button type='button' className='btn btn-primary me-2' onClick={NewUserOpen}> <i className='fa fa-user-plus'></i> Add User</button>                 
               <button type='button' className='btn btn-success' onClick={adminopen}><i className='fa fa-user-tie'></i> Add Admin</button>        
           </div>                   
        </div>                           
    </div>
  )
}

export default Search