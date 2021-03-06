import React from 'react';
import TodoApp from './TodoApp';
import useStyles from '../styles/AppStyles';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <header className={classes.header}>
        <h1>
          todo<span>list</span>
        </h1>
        <h2>A simple todolist app built with React Hooks & Context</h2>
      </header>
      <TodoApp />
      <a
        href="https://github.com/areebaqamar021/todolist-react"
        className={classes.link}
      >
        <strong>View source on GitHub &copy; areeba qamar</strong>
      </a>
    </div>
  );
}

export default App;
