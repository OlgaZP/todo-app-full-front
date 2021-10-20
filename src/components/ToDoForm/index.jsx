import React from 'react';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { createTaskAction } from '../../actions';
import styles from './ToDoForm.module.sass';

function ToDoForm (props) {
  const { createTask } = props;

  const initialTaskValues = {
    title: 'Task title ' + String(Math.trunc(Math.random() * 100)),
    description: 'Task Description ' + String(Math.trunc(Math.random() * 100)),
    date: new Date(),
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
          <Form className={styles.toDoFormContainer}>
            <div className={styles.toDoFormRow}>
              <label htmlFor='title'>ToDo title</label>
              <Field name='title' />
              <label htmlFor='priority'>Priority</label>
              <Field component='select' name='priority' multiple={false}>
                <option value='high'>high</option>
                <option value='normal'>normal</option>
                <option value='low'>low</option>
              </Field>
            </div>
            <div className={styles.toDoFormRow}>
              <label htmlFor='date'>Choose the date</label>
              <Field name='date' />
            </div>
            <div className={styles.toDoFormRow}>
              <label htmlFor='description'>Desctiption</label>
              <Field name='description' style={{ flexGrow: '1' }} />
              <button className={styles.addToDoBtn} type='submit'>
                Add To List
              </button>
            </div>
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
