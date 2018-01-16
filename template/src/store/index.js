import Vuex from 'vuex'

const store = new Vuex.Store({});


export function paramsGetter(keys, obj = {}) {
  const {params} = store.state;
  if (keys == null) {
    return extend(obj, params);
  }
  return keys.reduce((pre, cur) => {
    if (isObject(cur)) {
      Object.keys(cur).forEach((key) => pre[key] = params[cur[key]]);
    } else if(params[cur]) {
      if ('buExt' === cur) {
        pre[cur] = JSON.stringify(params[cur]);
      }else {
        pre[cur] = params[cur];
      }

    }
    return pre;
  }, obj);
}

export default store;
