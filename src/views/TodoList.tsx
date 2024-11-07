import React, { useState } from 'react';
import { useTodo } from '../context/TodoContext';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

export const TodoList: React.FC = () => {
    const { todos, dispatch } = useTodo();
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editInput, setEditInput] = useState('');

    const startEdit = (id: number, text: string) => {
        setEditingId(id);
        setEditInput(text);
    };

    const saveEdit = (id: number) => {
        if (editInput.trim()) {
            dispatch({ type: 'EDIT_TODO', payload: { id, text: editInput.trim() } });
            setEditingId(null);
        }
    };

    return (
        <div className="space-y-3">
            {todos.map(todo => (
                <div
                    key={todo.id}
                    className={`flex items-center justify-between p-4 bg-gray-50 rounded-lg border ${todo.completed ? 'border-green-200 bg-green-50' : 'border-gray-200'
                        }`}
                >
                    {editingId === todo.id ? (
                        <div className="flex-1 flex gap-2">
                            <input
                                type="text"
                                value={editInput}
                                onChange={(e) => setEditInput(e.target.value)}
                                className="flex-1 px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                onClick={() => saveEdit(todo.id)}
                                className="text-green-600 hover:text-green-700"
                            >
                                <FaCheck />
                            </button>
                            <button
                                onClick={() => setEditingId(null)}
                                className="text-red-600 hover:text-red-700"
                            >
                                <MdCancel />
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
                                    className="w-5 h-5 rounded border-gray-300 focus:ring-blue-500"
                                />
                                <span className={`text-lg ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                                    {todo.text}
                                </span>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => startEdit(todo.id, todo.text)}
                                    className="text-blue-600 hover:text-blue-700"
                                >
                                    <CiEdit />
                                </button>
                                <button
                                    onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
                                    className="text-red-600 hover:text-red-700"
                                >
                                    <MdDelete />
                                </button>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};
