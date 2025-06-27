import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function BackButton() {
  const navigate  = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }
  return (
    <button
    onClick={handleBack}
    className='flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-2xl shadow hover:bg-gray-200 transition'
    >
      <ArrowLeft className='w-5 h-5' />
      <span>Kembali</span>
    </button> 
  );
}

