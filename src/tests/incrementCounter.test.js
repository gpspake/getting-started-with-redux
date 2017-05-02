import deepFreeze from 'deep-freeze';

const incrementCounter = (list, index) => {
  return list
    .slice(0, index)
    .concat(list[index] + 1)
    .concat(list.slice(index + 1));
};

it('adds counter', () => {

  const listBefore = [0, 10, 20];

  deepFreeze(listBefore);

  const listAfter = [0, 11, 20];

  expect( incrementCounter(listBefore, 1) ).toEqual( listAfter );
});
