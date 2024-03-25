export interface TodoFormProps{
    addTodo: (todo: string) => void;
}

export interface TodoBase{
    task: string;
    completed: boolean;
}

export interface Todo extends TodoBase{
    id: number;
};

export interface TodoProps{
    task: Todo;
    toggleComplete: (taskId: number) => void;
    editTodo: (taskId: number) => void;
    deleteTodo: (taskId: number) => void;
}

export interface TodoFinal extends Todo{
    isEditing: boolean;
}

export interface EditTodoFormProps{
    editTask: (taskName: string, taskId: number) => void;
    task: TodoFinal;
}