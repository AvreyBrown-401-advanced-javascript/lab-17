'use strict';

jest.mock('fs');

const file = require('../app');

describe('tests our alter file library', () => {
  it('can read a file', () => {
    return file.readFile('test.txt')
      .then(contents => {
        expect(Buffer.isBuffer(contents)).toBeTruthy();
      });
  });

  it('can write a file', () => {
    return file.writeFile('test.txt', Buffer.from('test'))
      .then(results => {
        expect(results).toBeUndefined();
      });
  });
});
