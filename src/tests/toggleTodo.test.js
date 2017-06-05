import deepFreeze from 'deep-freeze';

const toggleTodo = (todo) => {
  const completed = !todo.completed;

  return {...todo, completed}
};

it('toggles todo', ()=>{

  const todoBefore = {
    id:0,
    text: 'Learn Redux',
    completed: false
  }

  deepFreeze(todoBefore);

  const todoAfter = {
    id:0,
    text: 'Learn Redux',
    completed: true
  }

  expect( toggleTodo(todoBefore) ).toEqual( todoAfter )
})
