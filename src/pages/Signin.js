

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  const [showpassword,setshowpassword] = useState(false);
  const [alertbox,setModel] = useState(false);
  const [loading,setLoading] = useState(false);
  const [data,setData] = useState({
    name:"",
    password:""
  })

  const handleOnChange = (e) =>{
      const{name,value} = e.target

      setData((preve)=>{
        return{
          ...preve,
          [name]: value
        }
      })
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
  }

  console.log("data",data)

  const toggleModel = () =>{
    setModel(!alertbox)
  }
  return (
    <div>
      <div className='head1'>
      <img className='introtopicon' src="img/introicon.png"/>
      <a href= 'Signin' className='loglink2'><h2>ʟօɢɨռ</h2></a>
      </div>
    <div className='h-screen-center'>
      <div className='card-form'>
        <div className='card-header'>
          <div className='lock-icons'>
          <img src="img/usericon2.png" width={50}height={50} className='icon-img'></img>
          </div>
        </div>
        <form className='form' onSubmit={handleSubmit}>

          <div className='form-element'>
          <label htmlFor='name'><h4>UserName:</h4></label>
          <div className='input-container'>
            <input type='text' id='name' name='name' value={data.name} disabled={loading} onChange={handleOnChange}/>
            </div>
          </div>
          
          <div className='form-element'>
          <label htmlFor='password'><h4>Password:</h4></label>
          <div className='input-container'>
          <input type={showpassword ? "text" : "password"} id='password' name='password' value={data.password} disabled={loading} onChange={handleOnChange}/>
          <div className='icons-password' onClick={()=>setshowpassword(preve => !preve)}>
            {
              showpassword ? <img src='img/eyeopen.jpg'width={25}height={20}className='eyeopen'></img> : <img src='img/eyeclose1.jpg'width={25}height={20}className='eyeopen'></img> 
            }
          
          
          </div>       
          </div>
          </div>

          <button className='btn-sign'>
            {
              loading ? "Loading..." : <h4>Login</h4>
            }
            </button>
        </form>
        <p>Dont't have an Account <Link to={"/Signup"} className='signuplink'>Sign Up?</Link> </p>
      </div>
    </div>
    <button 
    onClick={toggleModel}
    className='newuserbtn'>New User?</button>
    {alertbox &&(
      <div>
      <div className='alertbox'>
          <div className='alert-content'>
          <button onClick={toggleModel} className='popupclosebtn'>X</button>
              <b><p>Contact The Admin @...............</p></b>
          </div>
      </div>
  </div>
    )}    
    </div>
  )
}

export default Signin