import assert from 'power-assert';

import package from '../package.json';

import src from '../src/`;

describe(package.name, function() {
  it('loads without crashing', () => {
    assert.equal(src.obj.a, "1");
  });
  
});
