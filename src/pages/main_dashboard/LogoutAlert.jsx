import React from 'react';

export default function LogoutAlert({ show, onClose, onConfirm }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
      <div className="bg-white rounded-xl p-8 max-w-sm w-full text-center shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Konfirmasi Logout</h2>
        <p className="mb-6 text-gray-600">Apakah Anda yakin ingin keluar dari dashboard?</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onConfirm}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Logout
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
}