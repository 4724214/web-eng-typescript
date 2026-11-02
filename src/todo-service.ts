import type { Todo } from "./type.js";

const todos: Todo[] = [
    { id: 1, title: "型を定義する", completed: true},
    { id: 2, title: "関数を作る", completed: false },
];

export async function fetchTodos(): Promise<Todo[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return todos;
}

export async function findTodo(
    id: number
): Promise <Todo | undefined> {
    const currentTodos = await fetchTodos();
    return currentTodos.find((todo) => todo.id === id );
}

export async function countUnfinishedTask(): Promise<number>{
    const currentTodos = await fetchTodos();
    const incompletedTodos = currentTodos.filter(
        (todo) => !todo.completed,
    );
    return incompletedTodos.length;
}