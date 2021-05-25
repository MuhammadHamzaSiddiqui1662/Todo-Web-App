import TodoElement from './TodoElement';

function TodosList({list, updateTodo, deleteTodo}) {
    return (
        <ul className='todo-list'>
           { list.map( (todo, index) => <TodoElement key={index+1} id={index} text={todo} onUpdate={updateTodo} onDelete={deleteTodo} /> )}
        </ul>
    );
}

export default TodosList;