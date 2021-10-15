import React from 'react';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { createTaskAction } from '../../actions';

function ToDoForm (props) {
  const { createTask } = props;

  const initialTaskValues = {
    title: 'Task title ' + String(Math.trunc(Math.random() * 100)),
    description: 'Task Description ' + String(Math.trunc(Math.random() * 100)),
    date: Date.now(),
    isDone: Boolean(Math.round(Math.random())),
    priority: 'low',
  };

  const submitHandler = (values, formikBag) => {
    console.log('into submit handler :>> ');
    console.log('values :>> ', values);
    createTask(values);
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={initialTaskValues} onSubmit={submitHandler}>
      {formikProps => {
        return (
          <Form>
            <Field name='title' />
            <Field name='description' />
            <Field name='date' />
            <Field name='priority' />
            <button type='submit'>Add To List</button>
          </Form>
        );
      }}
    </Formik>
  );
}

const mapDispatchToProps = dispatch => ({
  createTask: task => {
    dispatch(createTaskAction(task));
  },
});

export default connect(null, mapDispatchToProps)(ToDoForm);
