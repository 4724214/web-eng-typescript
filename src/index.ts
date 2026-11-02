import { fetchTodos, findTodo, countUnfinishedTask } from "./todo-service.js"

const loaded = await fetchTodos();
console.log(loaded);

const found = await findTodo(2);

if (found === undefined) {
    console.log("Todoが見つかりません");
} else {
    console.log(found.title);
}

console.log( await countUnfinishedTask());