import React from 'react'

export default function MainDashboard() {
  const handleLogout = () => {

  }


  return (
    <>
    <div id='main-screen'  className='min-h-screen bg-danube-950 font-roboto'>
      <header className='bg-danube-900  text-white h-[150px] flex items-center px-8 gap-4'>
        <button>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2} stroke='currentColor' className='w-8 h-8'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
          </svg>
        </button>
        <h2 className='text-2xl font-bold'>Dashboard Utama </h2>
      </header>
    </div>
    
    </>
  )
}
