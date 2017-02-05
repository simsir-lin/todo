export default class LocalStorageService {
  constructor () {  }

  static set(key, value) {
    let _flag = '{--}';

    let type = typeof value;
    if (type === 'string' || type === 'number') {
      type += _flag;
      value = type + value;
    } else if (type === 'object') {
      value = type + _flag + JSON.stringify(value);
    }
    window.localStorage[key] = value;
  }

  static get(key) {
    let _flag = '{--}';

    let value = window.localStorage[key];
    if (!value) {
      return undefined;
    }
    let res = value.split(_flag);
    if (res[0] === 'string' || res[0] === 'number') {
      return res[1];
    } else {
      return JSON.parse(res[1]);
    }
  }

  static clear() {
    window.localStorage.clear();
  }
}
