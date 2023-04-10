import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  // expose ember data to the global namespace
  namespace = 'api';

  // use the same host as the ember app
  host = 'http://localhost:4200';

  // use the same headers as the ember app
  headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  // Expose the ember data store to the global namespace
  // so that it can be accessed from the ember app
  // This is required for the ember app to be able to
  // access the ember data store
  init() {
    super.init(...arguments);
    window.EmberDataStore = this.store;
  }
}
