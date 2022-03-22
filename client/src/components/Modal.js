import React from 'react';

const Modal = ({
  title,
  setTitle,
  description,
  setDescription,
  date,
  setDate,
  setPriority,
  onAddTodo,
}) => {
  return (
    <div
      id='authentication-modal'
      aria-hidden='true'
      class='hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0 mymodal'
    >
      <div class='relative px-4 w-full max-w-lg h-full md:h-auto'>
        <div class='relative bg-white rounded-lg shadow dark:bg-gray-700'>
          <div class='flex justify-end p-2'>
            <button
              type='button'
              class='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white'
              data-modal-toggle='authentication-modal'
            >
              <svg
                class='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </button>
          </div>
          <form class='px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8' action='#'>
            <div>
              <div></div>
            </div>
            <div className='removeMargin'>
              <label class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 '>
                Todo List
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
                      <span
                        class='ml-5'
                        className='priorityTitle priorityTitle-edit'
                      >
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
                        onClick={() =>
                          setPriority({ color: '#c3ddfd', text: 'Low' })
                        }
                      />
                      <span class='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 badgeOnAdd'>
                        Low
                      </span>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>

            <button
              onClick={(e) => onAddTodo(e)}
              data-modal-toggle='authentication-modal'
              type='button'
              class='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 todoCreateBtn'
            >
              Create Todo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
