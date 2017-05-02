import deepFreeze from 'deep-freeze';

const addCounter = (list) => {
  return [...list, 0];
};

it('adds counter', () => {

  const listBefore = [];

  deepFreeze(listBefore);

  const listAfter = [0];

  console.log(addCounter);

  expect( addCounter(listBefore) ).toEqual( listAfter );
});
