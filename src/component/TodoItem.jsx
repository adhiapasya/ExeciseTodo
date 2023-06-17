import React from 'react'

const TodoItem = ({ todo }) => {
    /*const todoTitleStyle = {
        if(todo.completed === true) {
            textDecoration: 'line-through'
      } else {
            textDecoration: 'none'
      }
}*/
    return (
        <div style={style.todoItem}>
            <p>{todo.title}</p>
        </div>
    )
}

const style = {
    todoItem: {
        border: '2px solid #f4f4f4',
        fontSize: '24px',
    }

}

export default TodoItem