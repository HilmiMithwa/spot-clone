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
      <div
  id='login-form-container'
  className='w-1/2 min-h-screen flex items-center justify-center bg-danube-950 text-white font-roboto'
>
  <form
    onSubmit={handleLogin}
    className='bg-danube-900 rounded-xl mx-auto max-w-xl w-full px-9 pt-8 pb-8'
  >
    <h1 className='font-semibold text-2xl mb-6 text-center'>
      Silahkan login terlebih dahulu
    </h1>

    {/* NIM Input */}
    <div className='mb-4 flex justify-center'>
      <div className='w-[397px]'>
        <label className='font-light block mb-1'>NIM:</label>
        <input
          type='text'
          className='bg-danube-800 rounded-[15px] h-[47px] w-full px-4'
        />
      </div>
    </div>

    {/* Password Input */}
    <div className='mb-4 flex justify-center'>
      <div className='w-[397px]'>
        <label className='font-light block mb-1'>Password:</label>
        <input
          type='password'
          className='bg-danube-800 mb-4 rounded-[15px] h-[47px] w-full px-4'
        />
      </div>
    </div>

    {/* Tombol */}
    <div id='button-container' className='flex flex-col gap-4 mt-4 w-[397px] mx-auto'>
      <button
        type='submit'
        className='w-full bg-danube-950 text-white font-bold py-3 rounded-lg'
      >
        Masuk
      </button>
      <button
        type='button'
        className='w-full bg-danube-950 text-white font-bold py-3 rounded-lg'
      >
        Clear
      </button>
    </div>
  </form>
</div>
    </div>
    </>
  )
}