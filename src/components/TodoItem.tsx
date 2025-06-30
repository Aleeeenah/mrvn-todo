
import React from 'react';
import { Trash2, Check } from 'lucide-react';
import { Todo } from '@/types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <div className={`bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-4 transition-all duration-300 hover:bg-white/30 hover:scale-[1.02] ${
      todo.completed ? 'opacity-75' : ''
    }`}>
      <div className="flex items-center gap-3">
        <button
          onClick={() => onToggle(todo.id)}
          className={`flex items-center justify-center w-6 h-6 rounded-full border-2 transition-all duration-200 ${
            todo.completed
              ? 'bg-gradient-to-r from-pink-500 to-purple-500 border-transparent text-white'
              : 'border-purple-300 hover:border-pink-400 hover:bg-white/10'
          }`}
        >
          {todo.completed && <Check size={14} />}
        </button>
        
        <span className={`flex-1 text-white transition-all duration-200 ${
          todo.completed ? 'line-through opacity-60' : ''
        }`}>
          {todo.text}
        </span>
        
        <div className="flex items-center gap-1">
          {todo.completed && <span className="text-lg">✅</span>}
          <button
            onClick={() => onDelete(todo.id)}
            className="text-pink-200 hover:text-pink-400 transition-colors duration-200 p-1 hover:bg-white/10 rounded-lg"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
