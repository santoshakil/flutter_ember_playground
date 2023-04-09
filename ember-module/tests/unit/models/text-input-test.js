import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | text input', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('text-input', {});
    assert.ok(model);
  });
});
