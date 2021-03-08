import { getAsync } from '@/services';

export default {
  namespace: 'todo',
  state: {
    greeting: '',
    data: [],
  },
  reducers: {
    set(state, { payload }) {
      return { ...state, ...payload };
    },

    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *setAsync({ payload: todo }, { put, call }) {
      const data = yield call(getAsync, todo);
      yield put({
        type: 'save',
        payload: {
          data,
        },
      });
    },
  },
};
