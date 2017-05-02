import deepFreeze from 'deep-freeze';

const addCounter = (list) => {
  list.push(0);
  return list;
};

it('adds counter', () => {

  const listBefore = [];

  deepFreeze(listBefore);

  const listAfter = [0];

  console.log(addCounter);

  expect( addCounter(listBefore) ).toEqual( listAfter );
});

