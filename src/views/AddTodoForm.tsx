import React, { useState } from 'react';
import { useTodo } from '../context/TodoContext';
import { IoMdAdd } from "react-icons/io";

export const AddTodoForm: React.FC = () => {
  const [input, setInput] = useState('');
  const { dispatch } = useTodo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch({ type: 'ADD_TODO', payload: input.trim() });
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Añade una nueva tarea..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2"
        >
          <IoMdAdd />
          Añadir
        </button>
      </div>
    </form>
  );
};