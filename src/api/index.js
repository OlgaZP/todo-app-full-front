// import axios from 'axios';

// const axiosParams = {
//   baseURL: 'http://127.0.0.1:5000/api',
// };

// const apiInstance = axios.create(axiosParams);

const tasks = [
  {
    id: Date.now() + Math.trunc(Math.random() * 1000000),
    title: 'Task title 1',
    description: 'Task Description 1',
    date: new Date(),
    isDone: false,
    priority: 'low',
  },
  {
    id: Date.now() + Math.trunc(Math.random() * 1000000),
    title: 'Task title 2',
    description: 'Task Description 2',
    date: new Date(),
    isDone: true,
    priority: 'high',
  },
  {
    id: Date.now() + Math.trunc(Math.random() * 1000000),
    title: 'Task title 3',
    description: 'Task Description 3',
    date: new Date(),
    isDone: true,
    priority: 'high',
  },
  {
    id: Date.now() + Math.trunc(Math.random() * 1000000),
    title: 'Task title 4',
    description: 'Task Description 4',
    date: new Date(),
    isDone: false,
    priority: 'normal',
  },
];

// export const getTasks = () => apiInstance.get('/tasks');
export const getTasks = () => {
  return Promise.resolve({ data: tasks });
};

//export const createTask = task => apiInstance.post(/tasks,task);
export const createTask = task => {
  const newTask = {
    id: new Date(),
    ...task,
  };
  tasks.push(newTask);
  return Promise.resolve({ data: newTask });
};

//export const updateTask = task => apiInstance.patch(/tasks,task);
export const updateTask = (id, taskForUpdate) => {
  const index = tasks.findIndex(t => t.id === id);
  const updatedTask = { ...tasks[index], ...taskForUpdate };

  // tasks[index].isDone = !tasks[index].isDone;

  return Promise.resolve({ data: updatedTask });
};

//export const deleteTask = id => apiInstance.delete(`/tasks/${id}`)
export const deleteTask = id => {
  const index = tasks.findIndex(t => t.id === id);

  return Promise.resolve({ data: tasks.splice(index, 1) });
};
