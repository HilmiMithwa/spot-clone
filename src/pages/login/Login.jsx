import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [nim, setNim] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login clicked', nim, password);

    if (nim && password) {
      navigate('/dashboard');
    } else {
      alert('NIM dan Password harus diisi!')
    }
  };

  const clearForm = () => {
    setNim('');
    setPassword('');
    alert('Form dibersihkan!');
  };

  const HandleLocalStorage = () => {
    
  }


  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      
      {/* Bagian kiri policy*/}
      <div
        id='login-container'
        className='w-full md:w-1/2 min-h-[50vh] md:min-h-screen flex items-center justify-center bg-cover bg-center text-white font-roboto relative'
        style={{ backgroundImage: "url('/gedung-isola.png')" }}
      >
        <div
          id='text-container'
          className='absolute top-4 left-4 md:top-6 md:left-10 text-xl md:text-3xl'
        >
          <h1 className='font-bold'>Single Sign-On</h1>
          <h2 className='font-light'>Universitas Pendidikan Indonesia</h2>
        </div>

        <div
          id='policy-container'
          className='bg-black bg-opacity-70 p-6 md:p-8 rounded-xl mx-4 md:mx-auto max-w-xl mt-20 md:mt-0'
        >
          <h1 className='font-semibold text-xl md:text-2xl text-center mb-4'>
            Selamat datang di SSO UPI
          </h1>
          <p className='text-justify text-sm md:text-base'>
            Seiring dengan sistem manajemen terintegrasi, SSO UPI merupakan salah satu gerbang integrasi berbagai aplikasi yang diberdayakan untuk civitas UPI.
            <br /><br />
            Semoga SSO UPI ini dapat mempermudah civitas dalam memberdayakan dan menganalisis hasil aplikasi yang ada, serta untuk terus menyempurnakan dari berbagai aspek. Masukan bapak/ibu dapat disampaikan melalui layanan-tik[at]upi.edu.
          </p>
        </div>
      </div>

      {/* Form Login */}
      <div
        id='login-form-container'
        className='w-full md:w-1/2 min-h-screen flex items-center justify-center bg-danube-950 text-white font-roboto px-4 py-8 md:px-0'
      >
        <form
          onSubmit={handleLogin}
          className='bg-danube-900 rounded-xl mx-auto max-w-xl w-full px-6 md:px-9 pt-8 pb-8'
        >
          <h1 className='font-semibold text-2xl mb-6 text-center'>
            Silahkan login terlebih dahulu
          </h1>

          {/* Input NIM */}
          <div className='mb-4'>
            <label className='font-light block mb-1'>NIM:</label>
            <input
              value={nim}
              type='text'
              onChange={(e) => setNim(e.target.value)}
              className='bg-danube-800 rounded-[15px] h-[47px] w-full px-4'
            />
          </div>

          {/* Input Password */}
          <div className='mb-6'>
            <label className='font-light block mb-1'>Password:</label>
            <input
              value={password}
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              className='bg-danube-800 rounded-[15px] h-[47px] w-full px-4'
            />
          </div>

          {/* Tombol */}
          <div className='flex flex-col gap-4 w-full'>
            <button
              type='submit'
              className='w-full bg-danube-950 text-white font-bold py-3 rounded-[15px]'
            >
              Masuk
            </button>
            <button
              type='button'
              onClick={clearForm}
              className='w-full bg-danube-950 text-white font-bold py-3 rounded-[15px]'
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
