import React from 'react';
import { useTodo } from '../context/TodoContext';

export const TodoSummary: React.FC = () => {
  const { todos } = useTodo();

  return (
    <div className="mt-6 text-sm text-gray-600">
      Total de tareas: {todos.length} | Completadas: {todos.filter(t => t.completed).length}
    </div>
  );
};