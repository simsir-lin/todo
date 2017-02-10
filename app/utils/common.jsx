export default class CommonService {
  constructor () {  }

  static getNowDate() {
    let now = new Date();
    return now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
  }

  static getRandomNumber() {
    return new Date().getTime();
  }
}
