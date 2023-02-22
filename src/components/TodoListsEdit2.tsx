import React from 'react';
import { useTodoDispatch, useTodoState } from '../context/TodoContext';

const TodoListsEdit2 = () => {
    const state = useTodoState(); //useContext(TodoStateContext) --> 리턴해주는 함수
    const dispatch = useTodoDispatch(); //useContext(TodoDispatchContext)
    const onDelTodo = (id:number) => {
        dispatch({type:"DELTODO", id:id})
    }
    const onToggletodo = (id:number) => [
        dispatch({type:"TOGGLETODO", id:id})
    ]
    return (
        <div>
            <ul>
                {state.map(todo=><li key={todo.id}><span>{todo.text}</span><button>삭제</button></li>)}
            </ul>
        </div>
    );
};

export default TodoListsEdit2;