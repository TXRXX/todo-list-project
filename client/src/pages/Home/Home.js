import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, TodoCard, Progressbar, Modal, Alert } from '../../components';
import { getUserAndTodos, addTodo } from '../../service/todo';
import { logout } from '../../service/auth';
import './home.css';
import 'flowbite';

const Home = () => {
  const [user, setUser] = useState();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [priority, setPriority] = useState(null);
  const [todos, setTodos] = useState([]);
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState('');
  let navigate = useNavigate();

  const onGetUserAndTodos = async () => {
    await getUserAndTodos().then((response) => {
      setUser(response.userResponse);
      setTodos(response.todoResponse);
    });
  };

  useEffect(() => {
    onGetUserAndTodos();
  }, [todos]);

  useEffect(() => {
    const refreshCount = parseInt(sessionStorage.getItem("refreshCount"));
    if (refreshCount < 2) {
      sessionStorage.setItem('refreshCount', String(refreshCount + 1));
      window.location.reload();
    } else {
      sessionStorage.removeItem('refreshCount');
    }
  }, []);

  const onAddTodo = async (e) => {
    e.preventDefault();
    if (!user) {
      setMessage('Please login to create todo!');
      setAlert(true);
      return;
    } else if (!title) {
      setMessage('Please enter the title of todo!');
      setAlert(true);
      return;
    }
    await addTodo(title, description, date, priority, user._id);
    setTitle('');
    setDescription('');
  };

  const onLogout = async () => {
    await logout();
    setUser(null);
    sessionStorage.setItem("refreshCount", 1);
    navigate('/login');
  };

  return (
    <div className='main'>
      <Alert alert={alert} setAlert={setAlert} message={message} />
      <Navbar user={user} logout={onLogout} />
      <Progressbar todos={todos} />
      <div className='gridContainer'>
        <button
          class='addTodo'
          type='button'
          data-modal-toggle='authentication-modal'
        >
          <span className='plus'>+</span>
          <br />
          <span className='addText'>Add Todo</span>
        </button>
        {todos.map((todo, index) => (
          <TodoCard todo={todo} key={index} />
        ))}
      </div>

      <Modal
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        date={date}
        setDate={setDate}
        setPriority={setPriority}
        onAddTodo={onAddTodo}
      />
    </div>
  );
};

export default Home;
