import deepFreeze from 'deep-freeze';

const removeCounter = (list, index) => {
  return list
    .slice(0, index)
    .concat(list.slice(index + 1));
};

it('adds counter', () => {

  const listBefore = [0, 10, 20];

  deepFreeze(listBefore);

  const listAfter = [0, 20];

  expect( removeCounter(listBefore, 1) ).toEqual( listAfter );
});
