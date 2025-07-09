import React from 'react'
import { useNavigate } from 'react-router-dom'
import LogoutAlert from './LogoutAlert';
import { useState } from 'react';

export default function MainDashboard() {
  const navigate = useNavigate();
  const [showLogoutAlert, setShowLogoutAlert] = useState(false);

  const handleback = () => {
    navigate('/');
    alert('Anda telah keluar dari dashboard utama');
  }

  //Manage assignment schedule
  const [assignments, setAssignments] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addAssignment = () => {
    const newAssignment = {
      title,
      description,
      id: Date.now()
    };
    
    setAssignments([...assignments, newAssignment]);
    setTitle('');
    setDescription('');
  }

  const deleteAssignment = (id) => {
    setAssignments(assignments.filter(assignment => assignment.id !== id));
  }

  const editAssignment = (id, newTitle, newDescription) => {
    const updatedAssignments = assignments.map(assignment => 
      assignment.id === id
      ? {...assignment, title: newTitle, description: newDescription}
      : assignment 
    );
    setAssignments(updatedAssignments);
  }



  return (
    <>
    <div id='main-screen'  className='min-h-screen bg-danube-950 font-roboto bg-opacity-90'>
      <header className='bg-danube-900  text-white h-[150px] flex items-center px-8 gap-4'>
        <button onClick={() => setShowLogoutAlert(true)} className='bg-danube-800 p-2 rounded-full hover:bg-danube-700 transition-colors'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2} stroke='currentColor' className='w-8 h-8'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
          </svg>
        </button>
        <h2 className='text-2xl font-bold'>Dashboard Utama </h2>
      </header>

      <main id='class-container'>
        <div id='student-name-container' className='bg-danube-900 mt-30 p-10 rounded-lg  w-[400px] h-[500px] text-white  overflow-y-auto'>
          <h1>Hilmi Mithwa Ramadhan</h1>
          <h2>2404042</h2>
          <button className='flex items-center gap-2 mt-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h10M4 18h14"/>       
            </svg>
            Daftar Mata Kuliah
          </button>
          <div id='student-assignment-schedule-management' className='mt-6'>
            <h3>Manage Jadwal Tugasmu</h3>
            <div className='flex flex-col gap-2 mb-4'>
              <input
                type='text'
                placeholder='Judul Tugas'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='p-2 rounded bg-danube-800 text-white'
                />
              <input
                type='text'
                placeholder='Deskripsi Tugas'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className='p-2 rounded bg-danube-800 text-white'
                />
              
              <button onClick={() => {
                if (title && description)
                {
                  addAssignment();
                } else {
                  alert('Judul dan Deskripsi tidak boleh kosong!');
                }
                }} className='bg-danube-800 p-3'>Tambah Tugas</button>     
            </div>

            <ul className='space-y-3'>
              {assignments.map((assignment) =>(
                <li key={assignment.id} className='bg-danube-800 p-3 rounded-lg flex justify-between items-start'>
                  <div>
                    <h4 className='font-bold text-lg'>{assignment.title}</h4>
                    <p className='text-sm'>{assignment.description}</p>
                  </div>
                  <div className='flex gap-2'>
                    <button
                      onClick={() => {
                        const newTitle = prompt('Judul Baru:', assignment.title);
                        const newDescription = prompt('Deskripsi Baru:', assignment.description);
                        if (newTitle && newDescription) {
                          editAssignment(assignment.id, newTitle, newDescription);
                        }
                      }}
                      className='bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition-colors'
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteAssignment(assignment.id)}
                      className='bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors'>
                      Hapus
                    </button>
                  </div>
                </li>
              ))}
            </ul>

          </div>
        </div>
        
      </main>
    </div>


    <LogoutAlert show={showLogoutAlert} onClose={() => setShowLogoutAlert(false)} onConfirm={handleback} />


    
    </>
  )
}
