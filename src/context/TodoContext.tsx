import React, { createContext, useContext, useReducer } from 'react';
import { Todo, TodoAction, TodoContextType } from '../types/todo';

const TodoContext = createContext<TodoContextType | undefined>(undefined);

const todoReducer = (state: Todo[], action: TodoAction): Todo[] => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, {
                id: Date.now(),
                text: action.payload,
                completed: false
            }];
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.payload);
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            );
        case 'EDIT_TODO':
            return state.map(todo =>
                todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
            );
    }
};

interface TodoProviderProps {
    children: React.ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
    const [todos, dispatch] = useReducer(todoReducer, []);

    return (
        <TodoContext.Provider value={{ todos, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodo = (): TodoContextType => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error('');
    }
    return context;
};
