
import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '@/types/todo';

interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

const TodoList = ({ todos, onToggleTodo, onDeleteTodo }: TodoListProps) => {
  if (todos.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📝</div>
        <p className="text-purple-100 text-lg">
          No todos yet! Add one above to get started ✨
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggleTodo}
          onDelete={onDeleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
