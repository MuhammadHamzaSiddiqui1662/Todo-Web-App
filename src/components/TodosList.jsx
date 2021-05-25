import TodoElement from './TodoElement';

function TodosList(props) {
    return (
        <ul className='todo-list'>
           { props.list.map( (todo, index) => <TodoElement key={index+1} id={index} text={todo} update={props.updateTodo} delete={props.deleteTodo} /> )}
        </ul>
    );
}

export default TodosList;