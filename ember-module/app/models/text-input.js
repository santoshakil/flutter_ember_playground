import Model, { attr } from '@ember-data/model';

export default class TextInputModel extends Model {
  @attr('string') content;
}
