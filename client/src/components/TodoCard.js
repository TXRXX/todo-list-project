import React, { useEffect, useState } from 'react';
import { markTodo } from '../service/todo';

const TodoCard = ({ todo }) => {
  const id = todo._id;
  const [isDone, setIsDone] = useState(todo.isDone);
  const textColor = [
    { bgcolor: '#ffd5c8', color: '#9b1c1c' },
    { bgcolor: '#bcf0da', color: '#03543f' },
    { bgcolor: '#c3ddfd', color: '#1e429f' },
  ];
  const usageTextColor = textColor.filter(
    (_) => _.bgcolor === todo.priority?.color
  )[0].color;

  useEffect(() => {
    const onMarkTodo = async () => {
      await markTodo(id, isDone);
    };
    onMarkTodo();
  }, [isDone, id]);

  const navigateToEditPage = (e) => {
    if (e.target.id === 'checkedDone') return;
  };

  return (
    <a href={`/edit/${todo._id}`} className='todoCard' onClick={(e) => navigateToEditPage(e)}>
      {/* START BADGE */}
      <span
        style={{
          backgroundColor: `${todo.priority?.color}`,
          color: `${usageTextColor}`,
        }}
        class='float-left mt-3 bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900 badges'
      >
        {todo.priority?.text}
      </span>
      {/* END BADGE */}

      <span id='title'>{todo.title}</span>
      <span id='desc'>• {todo?.description}</span>
      <label className='containerCheck'>
        <input
          type='checkbox'
          className='todoCheck'
          name='doneTodo'
          id='checkedDone'
          onClick={() => setIsDone(!isDone)}
          checked={todo.isDone}
        />
        <span className='checkmark'></span>
      </label>
      <span
        class='mt-3 text-gray-400 opacity-30 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 date'
        data-dropdown-toggle='dropdown-more'
      >
        <svg
          class='mr-1 w-3 h-3'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
            clip-rule='evenodd'
          ></path>
        </svg>
        {todo.deadLine?.split('T')[0]}
      </span>
    </a>
  );
};

export default TodoCard;
