import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import ModalEdit from "../../components/ModalEdit";
import "./edit.css";
import { useParams, useNavigate } from "react-router-dom";
import Confirm from "../../components/Confirm";
import { getUserAndUniqueTodo, editTodo, deleteTodo } from '../../service/todo';
import { logout } from '../../service/auth';

const Edit = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [date, setDate] = useState(null);
  const [priority, setPriority] = useState(null);
  const { id } = useParams();

  const onGetUserAndUniqueTodo = async (id) => {
    await getUserAndUniqueTodo(id).then((response) => {
      setUser(response.userResponse);
      setTitle(response.todoResponse.title);
      setDescription(response.todoResponse.description);
      setDate(response.todoResponse.deadLine?.split("T")[0]);
      setPriority(response.todoResponse.priority);
    });
  };

  useEffect(() => {
    onGetUserAndUniqueTodo(id);
  }, [id]);

  const onEditTodo = async () => {
    await editTodo(id, title, description, date, priority).then((res) => console.log(res));
  };

  const onDeleteTodo = async () => {
    await deleteTodo(id).then((res) => {
      console.log(res);
    });
    sessionStorage.setItem("refreshCount", 1);
    navigate('/');
  };

  const onLogout = async () => {
    await logout();
    setUser(null);
    sessionStorage.setItem("refreshCount", 1);
    navigate('/login');
  };

  return (
    <div className="containerEdit">
      <Navbar user={user} logout={onLogout} />
      <ModalEdit
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        date={date}
        setDate={setDate}
        priority={priority}
        setPriority={setPriority}
      />
      <Confirm deleteFunction={onDeleteTodo} />
      <div className="outBtnWrapper">
        <div className="manageBtnWrapper">
          <a href='/' className="manageBtn saveBtn" onClick={onEditTodo}>
            SAVE
          </a>
          <button
            class="manageBtn deleteBtn"
            type="button"
            data-modal-toggle="popup-modal"
          >
            DELETE
          </button>
          <a className="manageBtn cancelBtn" href="/">
            <span>CANCEL</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Edit;
