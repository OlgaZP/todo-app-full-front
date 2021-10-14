import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './../../actions';
import ACTION_TYPES from '../../actions/actionTypes';

function ToDoList (props) {
  const { tasks, isFetching, error, getTasks, deleteTask } = props;

  useEffect(() => {
    getTasks();
  }, []);

  console.log('tasks from ToDoListCOmponent:>> ', tasks);
  const mapTask = ({ id, title, date, isDone, priority }) => {
    const deleteHandler = () => {
      deleteTask(id);
    };

    return (
      <li key={id}>
        id: {id} title: {title} date: {date.toString()} priority: {priority}
        <input type='checkbox' checked={isDone} />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
