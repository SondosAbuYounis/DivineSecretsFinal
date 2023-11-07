import React from 'react'

export const ModalCart = () => {
  return (
  
    <div className='fixed inset-0 flex items-center justify-center z-50'>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative bg-white rounded-lg shadow p-4 dark:bg-gray-800">
            <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Your not logged in</h2>
            <p className="text-gray-700 dark:text-gray-300">Please Sign in to access cart</p>

            <Link to='/signin' >
            <button
            className="text-primary-600 hover:underline dark:text-primary-500 mt-4"
            >
            Sign In
            </button>
        </Link>
        </div>
    </div>
    
  )
}
