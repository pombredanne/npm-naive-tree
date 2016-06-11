const expect = require('../support/expect');

const DependencyResolver = require('../../lib/dependency-resolver');

describe('DependencyResolver', () => {
  const underTest = new DependencyResolver();

  describe('resolve', () => {
    it('returns first-order dependencies as a json list, with no version numbers', () =>
      expect(underTest.resolve('gjvis-fixture-a')).to.eventually.deep.equal([
        'gjvis-fixture-b',
        'gjvis-fixture-c',
        'gjvis-fixture-d',
        'gjvis-fixture-e',
      ])
    );
  });

  describe('registryHost', function () {
    it('defaults to https://registry.npmjs.org', function () {
      expect(underTest.registryHost).to.equal('https://registry.npmjs.org');
    });
  });
});