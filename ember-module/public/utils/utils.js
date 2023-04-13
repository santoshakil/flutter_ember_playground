// import { inject as service } from '@ember/service';

// export default class MyUtils {
//   // @service store;

//   async getMyModelData() {
//     // let myModel = await this.store.findAll('text-input');
//     // return myModel;
//     console.log('getMyModelData');
//   }
// }

console.log('utils.js');

// fetch from http://0.0.0.0:4200/api/text-input/
async function getMyModelData() {
  let response = await fetch('/api/text-input/');
  let data = await response.json();
  return data;
}

console.log(getMyModelData());
