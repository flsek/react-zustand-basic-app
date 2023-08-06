import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
let todoStore = (set) => ({
  todos: [],
  addTodo: (todoText) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          text: todoText,
          id: getId(),
          isCompleted: false,
        },
      ],
    })),
  deleteTodo: (todoId) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== todoId),
    })),

  completeTodo: (todoId) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
      ),
    })),
});
todoStore = devtools(todoStore);
todoStore = persist(todoStore, { name: "todo" });
export const useTodoStore = create(todoStore);
let id = 0;
function getId() {
  return id++;
}
