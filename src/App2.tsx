
import React from 'react';
import TodoContext from './context/TodoContext';
import InputTodo from './components/InputTodo';
import TodoListsEdit2 from './components/TodoListsEdit2';
const App2 = () => {
    return (
        <TodoContext>
            <TodoListsEdit2/>
        </TodoContext>
    );
};

export default App2;