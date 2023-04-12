import DS from 'ember-data';
import AdapterFetch from 'ember-fetch/mixins/adapter-fetch';
const { JSONAPIAdapter } = DS;

export default class ApplicationAdapter extends JSONAPIAdapter.extend(
  AdapterFetch
) {
  host = 'http://0.0.0.0:4200';
  namespace = 'api';
}
