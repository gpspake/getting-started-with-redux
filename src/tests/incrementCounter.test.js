import deepFreeze from 'deep-freeze';

const incrementCounter = (list, index) => {
  list[index]++;
  return list;
};

it('adds counter', () => {

  const listBefore = [0, 10, 20];

  deepFreeze(listBefore);

  const listAfter = [0, 11, 20];

  expect( incrementCounter(listBefore, 1) ).toEqual( listAfter );
});
