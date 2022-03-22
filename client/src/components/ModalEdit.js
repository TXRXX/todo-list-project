import React from 'react';

const ModalEdit = ({
  title,
  setTitle,
  description,
  setDescription,
  date,
  setDate,
  priority,
  setPriority,
}) => {
  return (
    <div className='bodyWrapper'>
      <div className='manageWrapper'>
        <label class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 '>
          Edit Todo List
        </label>
        <div>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            class='todoInput'
            placeholder='Title (Require)'
            required
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            class='todoInput descInput'
            placeholder='Description (Optional)'
            required
          />

          <input
            type='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
            class='todoInput'
            required
          />
          <div className='priorityWrapper'>
            <fieldset class='float-left mt-3 priorityWrapper-edit'>
              <div class='flex items-center ml-4'>
                <span class='ml-5' className='priorityTitle priorityTitle-edit'>
                  Priority :
                </span>
              </div>
              <div class='flex items-center mb-2 ml-3'>
                <input
                  className='priority1 priority1-edit'
                  type='radio'
                  name='priority'
                  onClick={() =>
                    setPriority({ color: '#ffd5c8', text: 'High' })
                  }
                  checked={priority?.text === 'High'}
                />
                <span class='bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900 badgeOnAdd'>
                  High
                </span>
              </div>
              <div class='flex items-center mb-2 ml-3'>
                <input
                  className='priority2 priority1-edit'
                  type='radio'
                  name='priority'
                  onClick={() =>
                    setPriority({ color: '#bcf0da', text: 'Normal' })
                  }
                  checked={priority?.text === 'Normal'}
                />
                <span class='bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900 badgeOnAdd'>
                  Normal
                </span>
              </div>
              <div class='flex items-center mb-2  ml-3'>
                <input
                  className='priority3 priority1-edit'
                  type='radio'
                  name='priority'
                  onClick={() => setPriority({ color: '#c3ddfd', text: 'Low' })}
                  checked={priority?.text === 'Low'}
                />
                <span class='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 badgeOnAdd'>
                  Low
                </span>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
