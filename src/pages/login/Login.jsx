import React, { useState } from 'react'

export default function Login() {
  const [nim, setNim] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login clicked', nim, password);
  }

  const clearForm = () =>{
    setNim(' ');
    setPassword(' ');
    
  }

  return (
    <>
    <div className='min-h-screen flex'>
      <div
        id="login-container"
        className="w-1/2 min-h-screen flex items-center justify-center bg-cover bg-center text-white font-roboto"
        style={{ backgroundImage: "url('/gedung-isola.png')" }} 
      >
        <div id="text-container" className='absolute top-6 left-10 text-3xl'>
          <h1 className='font-bold'>Single Sign-On</h1>
          <h2 className='font-light'>Universitas Pendidikan Indonesia</h2>
        </div>

        <div id='policy-container' className='text-white font-roboto bg-black  p-8 rounded-xl mx-auto max-w-xl ml-'>
          <h1 className='font-semibold text-2xl text-center mb-6'>Selamat datang di SSO UPI</h1><br/>
          <div id='policy-text-container' className='text-justify'>
            <p className='text-justify'>
              Seiring dengan sistem manajemen terintegrasi, SSO UPI merupakan salah satu gerbang integrasi berbagai aplikasi yang diberdayakan untuk civitas UPI <br/><br/>Semoga SSO UPI ini dapat mempermudah civitas dalam memberdayakan dan menganalisis hasil aplikasi yang ada, serta untuk terus menyempurnakan dari berbagai aspek. Masukan bapak/ibu dapat disampaikan melalui layanan-tik[at]upi.edu.
            </p>
          </div>
        </div>
      </div>

      {/*Login form container */}
      <div id='login-form-container' className='w-1/2 min-h-screen flex items-center justify-center bg-danube-950 text-white font-roboto'>
        <form onSubmit={handleLogin} className='bg-danube-900 rounded-xl mx-auto max-w-xl w-full px-9 pt-8 pb-8'>
          <h1 className='font-semibold text-2xl mb-6 text-center'>Silahkan login terlebih dahulu</h1>
          <div id='nim-container'>
            <label>NIM:</label><br/>
            <input className='bg-danube-800'></input>
          </div>
          <div id='password-container'>
            <label>Password:</label><br/>
            <input className='bg-danube-800 mb-10'></input>
          </div>

          <div id='button-container '>
            <button className='bg-danube-950 mb-5 justify-center pt-3 pb-3 pl-50 pr-47'>Submit</button><br/>
            <button className='bg-danube-950 justify-center pt-3 pb-3 pl-50 pr-50'>Clear</button>
          </div>
        </form>
      </div>
    </div>
    </>

    
    
  )
}