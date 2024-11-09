import React from 'react'

const Userintro = () => {
  return (
    <div>
      <div className='head'>
      <img className='introtopicon' src="img/introicon.png"/>
      <a href= 'Signin' className='loglink2'><h2>ʟօɢɨռ</h2></a>
      </div>

      <div className='contentintro'>
        <h1 className='h1intro'>TCS</h1>
        <h3 className='h3intro'>Let's Start Your</h3>
        <h4 className='h4intro'>Courier</h4>
       <a href='Signin'> <button className='btnintro'>Get Started</button></a>
      </div>
      <div><img className='introimg' src="img/tcsicon.png"/></div>

    </div>
  )
}

export default Userintro