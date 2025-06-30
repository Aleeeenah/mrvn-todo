
import React from 'react';

interface TodoHeaderProps {
  completedCount: number;
  totalCount: number;
}

const TodoHeader = ({ completedCount, totalCount }: TodoHeaderProps) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-white mb-2 flex items-center justify-center gap-2">
        <span>✨</span>
        Todo List
        <span>🌸</span>
      </h1>
      <p className="text-purple-100 text-lg">
        {totalCount === 0 ? (
          <span className="flex items-center justify-center gap-1">
            Ready to start? Add your first todo! <span>💪</span>
          </span>
        ) : (
          <span className="flex items-center justify-center gap-1">
            <span>🎯</span>
            {completedCount} of {totalCount} completed
            {completedCount === totalCount && totalCount > 0 && <span>🎉</span>}
          </span>
        )}
      </p>
    </div>
  );
};

export default TodoHeader;
