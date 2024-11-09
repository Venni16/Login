

import React, { useState } from 'react'
import { Await, Link } from 'react-router-dom'
import imagetobase from '../helpers/imagetobase';

const Signup = () => {
  const [showpassword,setshowpassword] = useState(false);
  const [showconfirmPassword,setshowconfirmPassword] = useState(false);
  const [loading,setLoading] = useState(false);
  const [data,setData] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    profilepic:""
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

  const handleUploadfile = async(e) => {
      const file = e.target.files[0]
      let image1 =""

      if(file?.name){
        console.log(file)
        image1 = await imagetobase(file)
      }
        
      setData((preve)=>{
        return{
          ...preve,
          profilepic:image1
        }
      })
      console.log("imagetobase",image1)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
  }

  console.log("data",data)
  return (
    <div>
      <div className='head1'>
      <img className='introtopicon' src="img/introicon.png"/>
      <a href= 'Signin' className='loglink2'><h2>ʟօɢɨռ</h2></a>
      </div>
    <div className='h-screen-center'>
      <div className='card-form'>
        <div className='card-header'>
              <div className='sign-form-lock-container'>
              {
              data.profilepic ? (
                <img src={data.profilepic} className='profile-pic'/>
              )
              :
              <div className='lock-icons'>
              <img src="img/usericon2.png" width={50}height={50} className='icon-img'></img>
              </div>
            }
              <form>
                <label htmlFor='upload-pic-input'>
                <div className='upload-pic'>Upload Pic</div>
                <input type='file' id='upload-pic-input' onChange={handleUploadfile} />
                </label>
              </form>
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
          <label htmlFor='email'><h4>email:</h4></label>
          <div className='input-container'>
            <input type='email' id='email' name='email' value={data.email} disabled={loading} onChange={handleOnChange}/>
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

          <div className='form-element'>
          <label htmlFor='confirmPassword'><h4>Confirm Password:</h4></label>
          <div className='input-container'>
          <input type={showconfirmPassword ? "text" : "password"} id='confirmPassword' name='confirmPassword' value={data.confirmPassword} disabled={loading} onChange={handleOnChange}/>
          <div className='icons-password' onClick={()=>setshowconfirmPassword(preve => !preve)}>
            {
              showconfirmPassword ? <img src='img/eyeopen.jpg'width={25}height={20}className='eyeopen'></img> : <img src='img/eyeclose1.jpg'width={25}height={20}className='eyeopen'></img> 
            }
          </div>
                 
          </div>
          </div>

         

          <button className='btn-sign'>
            {
              loading ? "Loading..." : <h4>Create Account</h4>
            }
            </button>
        </form>
        <p>Already have an Account <Link to={"/Signin"} className='signuplink'>Sign in?</Link> </p>
      </div>
    </div>
    </div>
  )
}
export default Signup