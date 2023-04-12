import React from 'react';
//import { findAllInRenderedTree } from 'react-dom/test-utils';
import './TodoItem.css';

function TodoItem(props) {
  // const onComplete = () => {
  //   alert('ya completaste el toDo ' + props.text);
  // };
  // const onDelete = () => {
  //   alert('Borraste el toDo ' + props.text);
  // };  

  return (
    <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span 
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };