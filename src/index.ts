const todos = [
    { id: 1, title: "型を復習する", completed: true },
    { id: 2, title: "配列を学ぶ", completed: false },
    { id: 3, title: "レポートを書く", completed: false },
];

for (const todo of todos) {
    const status = todo.completed ? "完了" : "未完了";
    console.log(`${todo.id}: ${todo.title} [${status}]`);
}

const completedTodos = todos.filter((todo) =>{
    return todo.completed;
});

console.log(completedTodos);

const titles = todos.map((todo) => {
    return todo.title;
});

console.log(titles);

const completedBefore = todos.filter((todo) => todo.completed).length;

for (const todo of todos){
    if (todo.id === 2){
        todo.completed = true;
        console.log(`更新後: ${todo.title} [完了]`);
    }
}

const completedAfter = todos.filter((todo) => todo.completed).length;
console.log(`完了件数: 更新前 ${completedBefore}件 -> 更新後 ${completedAfter}件`);


const myTodos = [
    { id: 1, title: "レポート", completed: true },
    { id: 2, title: "小テスト", completed: false },
    { id: 3, title: "期末試験", completed: false },
    { id: 4, title: "プレゼンテーション", completed: false },
];

const isCompletedBefore = myTodos.filter((todo) => todo.completed).length;

console.log(isCompletedBefore);

for (const myTodo of myTodos){
    if(myTodo.completed === false){
        myTodo.completed = true;
        console.log(`更新後: ${myTodo.title} [完了]`);
    }
}

const isCompletedAfter = myTodos.filter((todo) => todo.completed).length;

console.log(isCompletedAfter);