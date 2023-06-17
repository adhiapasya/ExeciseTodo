import React from 'react'
import TodoItem from './TodoItem'

const Todos = ({ todosValue }) => {
    // console.log(todosValue);
    return (
        <div style={{ width: '40%', margin: '0 auto' }}>
            {/* <h1>This is Todos component</h1> */}
            {todosValue?.map((todo) => {
                return <TodoItem key={todo.id} todo={todo} />
            })}

        </div>
    )
}

const styles = {
    container: {
        width: '40%',
        margin: '0 auto',
    },
}

export default Todos