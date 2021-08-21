{
  type Todo = {
    title: string;
    description: string;
    label: string;
    priority: "high" | "low";
  };

  const updateTodo = (todo: Todo, fieldsToUpdate: Partial<Todo>): Todo => {
    // fieldsToUpdate parameter 로 ToDo Type 의 일부분만 전달 가능
    return { ...todo, ...fieldsToUpdate };
    // 일부분만 update 가능
  };

  const todo: Todo = {
    title: "Learn Typescript",
    description: "Hard coding",
    label: "study",
    priority: "high",
  };

  const updated = updateTodo(todo, { priority: "low" });
  console.log(updated);
}
