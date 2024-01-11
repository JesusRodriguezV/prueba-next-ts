"use client"

import { useFormStatus } from "react-dom"

const Loading = () => {
  const { pending } = useFormStatus()

  if (!pending) return null

  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50">
      <div className="flex flex-col items-center justify-center w-64 h-64 bg-white rounded-lg shadow-lg">
        <p className="mt-4 text-gray-500">Cargando...</p>
      </div>
    </div>
  )
}

export default Loading
