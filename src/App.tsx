import { useState } from 'react'
import './App.css'
import { TodoProvider } from './context/TodoContext'
import { AddTodoForm } from './views/AddTodoForm'
import { TodoList } from './views/TodoList'
import { TodoSummary } from './components/Summary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoProvider>
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">TODO</h1>
            <AddTodoForm />
            <TodoList />
            <TodoSummary />
          </div>
        </div>
      </div>
    </TodoProvider>
    </>
  )
}

export default App
