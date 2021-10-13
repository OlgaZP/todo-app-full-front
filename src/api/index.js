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
    date: Date.now(),
    isDone: false,
    priority: 'low',
  },
  {
    id: Date.now() + Math.trunc(Math.random() * 1000000),
    title: 'Task title 2',
    description: 'Task Description 2',
    date: Date.now(),
    isDone: true,
    priority: 'high',
  },
];

// export const getTasks = () => apiInstance.get('/tasks');
export const getTasks = () => {
  return Promise.resolve({ data: tasks });
};
