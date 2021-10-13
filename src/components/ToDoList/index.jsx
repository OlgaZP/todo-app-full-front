import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './../../actions';
import ACTION_TYPES from '../../actions/actionTypes';

function ToDoList (props) {
  const { tasks, isFetching, error, getTasks } = props;

  useEffect(() => {
    getTasks();
  }, [tasks.length]);

  console.log('tasks from ToDoListCOmponent:>> ', tasks);
  const mapTask = ({ id, title, description, date, isDone, priority }) => {
    return (
      <li key={id}>
        id: {id} title: {title} description: {description} date: {date}{' '}
        priority: {priority}
        <input type='checkbox' checked={isDone} />
      </li>
    );
  };

  return <ul>{tasks.map(mapTask)}</ul>;
}

const mapStateToProps = state => state.sagaTasks;

const mapDispatchToProps = dispatch => ({
  getTasks: () => dispatch(actionCreators.getTasksAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
