import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Electron + React + Vite
        </h1>
        <p className="text-gray-600 text-center mb-6">
          A minimal starter with TypeScript and Tailwind CSS
        </p>
        <div className="text-center">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 shadow-md"
          >
            Count is {count}
          </button>
        </div>
        <div className="mt-6 text-sm text-gray-500 text-center">
          <p>Edit <code className="bg-gray-100 px-2 py-1 rounded">src/App.tsx</code> and save to test HMR</p>
        </div>
      </div>
    </div>
  )
}

export default App