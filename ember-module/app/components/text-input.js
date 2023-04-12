import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TextInputComponent extends Component {
  @service store;

  text = '';

  @action
  updateText(event) {
    let value = event.target.value;
    this.text = value;
    let record = this.store.createRecord('text-input', {
      id: 1,
      content: value,
    });
    record.save();
    console.log('record');
    console.log(this.store.peekAll('text-input'));
  }
}
