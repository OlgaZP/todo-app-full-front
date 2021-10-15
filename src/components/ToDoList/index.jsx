import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './../../actions';
import ACTION_TYPES from '../../actions/actionTypes';

function ToDoList (props) {
  const { tasks, isFetching, error, getTasks, deleteTask, updateTask } = props;

  useEffect(() => {
    getTasks();
  }, []);

  console.log('tasks from ToDoListCOmponent:>> ', tasks);
  const mapTask = ({ id, title, date, isDone, priority }) => {
    const deleteHandler = () => {
      console.log('id from delete handler :>> ', id);
      deleteTask(id);
    };

    const changeDoneStatusHandler = () => {
      console.log('change done status :>> ');
      updateTask(id, { isDone: !isDone });
    };

    return (
      <li key={id}>
        id: {id} title: {title} date: {date} priority: {priority}
        <input
          type='checkbox'
          checked={isDone}
          onChange={changeDoneStatusHandler}
        />
        <button onClick={deleteHandler}> X </button>
      </li>
    );
  };

  return <ul>{tasks.map(mapTask)}</ul>;
}

const mapStateToProps = state => state.tasks;

const mapDispatchToProps = dispatch => ({
  getTasks: () => dispatch(actionCreators.getTasksAction()),
  deleteTask: id => dispatch(actionCreators.deleteTaskAction(id)),
  updateTask: (id, taskForUpdate) =>
    dispatch(actionCreators.updateTaskAction(id, taskForUpdate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
