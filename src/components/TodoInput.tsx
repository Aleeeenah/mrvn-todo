
import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface TodoInputProps {
  onAddTodo: (text: string) => void;
}

const TodoInput = ({ onAddTodo }: TodoInputProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddTodo(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo... 💭"
          className="w-full px-4 py-3 pr-12 bg-white/30 backdrop-blur-sm border border-white/40 rounded-2xl text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-200"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-pink-500 to-purple-500 text-white p-2 rounded-xl hover:from-pink-600 hover:to-purple-600 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-300"
        >
          <Plus size={18} />
        </button>
      </div>
    </form>
  );
};

export default TodoInput;
