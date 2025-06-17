import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react'; // opsional pakai ikon dari lucide

export default function BackButton({ label = "Kembali" }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <button
      onClick={handleBack}
      className="flex items-center gap-2 text-blue-600 hover:underline"
    >
      <ArrowLeft className="w-5 h-5" /> 
      {label}
    </button>
  );
}
