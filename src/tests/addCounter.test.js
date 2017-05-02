import deepFreeze from 'deep-freeze';

const addCounter = (list) => [...list, 0];

it('adds counter', () => {

  const listBefore = [];

  deepFreeze(listBefore);

  const listAfter = [0];

  expect( addCounter(listBefore) ).toEqual( listAfter );
});
