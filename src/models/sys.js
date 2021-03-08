const getOpenKeys = () => {
  const key = typeof window !== 'undefined' ? `/${window.location.pathname.split('/')[1]}` : '/';
  return [key] || [];
};

export default {
  namespace: 'sys',
  state: {
    error: '',
    openKeys: getOpenKeys(),
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
