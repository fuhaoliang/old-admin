
export default {

  namespace: 'global',

  state: {
    routes: [1111],
    branch: [],
    location: {}
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    setRoutes(state, { payload: routes }){
      return { ...state, routes }
    },
    setBranch(state, { payload: branch }){
      return { ...state, branch }
    },
  },
};
