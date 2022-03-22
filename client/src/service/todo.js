import axios from 'axios';

export async function getUserAndTodos() {
    const userResponse = await axios.get('/auth/me');
    const { _id: userId } = userResponse.data;
    const todoResponse = await axios.get(`/todo/${userId}`);
    return { userResponse: userResponse.data, todoResponse: todoResponse.data };
}

export async function getUserAndUniqueTodo(todoId) {
    const userResponse = await axios.get('/auth/me');
    const todoResponse = await axios.get(`/todo/find/${todoId}`);
    return { userResponse: userResponse.data, todoResponse: todoResponse.data };
}

export async function addTodo(title, description, deadLine, priority, userId) {
    let defaultPriority;
    if (!priority) {
        defaultPriority = { color: '#bcf0da', text: 'Normal' };
    }
    const response = await axios.post('/todo', {
        title,
        description,
        userId,
        deadLine,
        priority: !priority ? defaultPriority : priority
    });
    return response.data;
}

export async function editTodo(id, title, description, deadLine, priority, userId) {
    const response = await axios.put(`/todo/${id}`, {
        title,
        description,
        deadLine,
        priority,
        userId
    });
    return response.data;
}

export async function deleteTodo(id) {
    const response = await axios.delete(`/todo/${id}`);
    return response.data;
}

export async function markTodo(id, isDone) {
    await axios.put(`/todo/${id}`, {
        isDone: isDone
    });
}

