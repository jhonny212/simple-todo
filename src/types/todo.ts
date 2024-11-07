export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export type TodoAction =
    | { type: 'ADD_TODO'; payload: string }
    | { type: 'DELETE_TODO'; payload: number }
    | { type: 'TOGGLE_TODO'; payload: number }
    | { type: 'EDIT_TODO'; payload: { id: number; text: string } };

export interface TodoContextType {
    todos: Todo[];
    dispatch: React.Dispatch<TodoAction>;
}