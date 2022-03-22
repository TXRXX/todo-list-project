import React from 'react';

const Progressbar = ({ todos }) => {
  const doneTodos = todos.filter((todo) => todo.isDone);
  const percent = todos.length !== 0 ? (doneTodos.length / todos.length) * 100 : 0;

  return (
    <div className='progWrapper'>
      <span className='progText'>Your Progess</span>
      <div class='center'>
        {' '}
        <div className='progOutter'>
          <div className='prog' style={{ width: `${percent}%` }}>
            {percent !== 0 &&(
            <span className='progPercent'>{parseInt(percent)}%</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progressbar;
