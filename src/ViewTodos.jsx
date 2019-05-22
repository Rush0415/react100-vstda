import React from 'react';
import ListItem from './ListItem';

const ViewTodos = (props) => {
  return (
    <div className='col-md-8'>
      <div className='card'>
        <ul className='list-group'>
          ViewTodos
          {props.todoItems.map((newTodoItems) => {
            return (
              <ListItem
                key={ newTodoItems.id }
                id={ newTodoItems.id }
                description={ newTodoItems.description }
                priority={ newTodoItems.priority }
                saveItem={ props.saveItem }
                deleteItem={ props.deleteItem }
                handleEditDisplay={ props.handleEditDisplay }
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default ViewTodos;
