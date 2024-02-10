export interface TodoFormProps{
    addTodo: (todo: string) => void
}

export interface TodoBase{
    task: string;
    completed: boolean;
}

export interface Todo{
    id: number;
    task: string;
    completed: boolean;
};
  
export interface TodoProps{
    task: Todo;
    toggleComplete: (taskId: number) => void;
    editTodo: (taskId: number) => void;
    deleteTodo: (taskId: number) => void;
}

export interface TodoFinal{
    id: number
    task: string;
    completed: boolean;
    isEditing: boolean;
}