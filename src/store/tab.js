export default {
  state: {
    isCollapse: false,
    currentMenu: null,
    tagsList: [{
      path: '/',
      name: 'home',
      label: '首页',
      icon: 'home'
    }]
  },
  mutations: {
    collapseMenu (state) {
      state.isCollapse = !state.isCollapse;
    },
    selectMenu (state, val) {
      if (val.name === 'home') {
        state.currentMenu = null;
      } else {
        state.currentMenu = val;
        const result = state.tagsList.findIndex((item) => item.name === val.name);
        // eslint-disable-next-line no-unused-expressions
        result === -1 ? state.tagsList.push(val) : '';
      }
    },
    closeTag (state, val) {
      const result = state.tagsList.findIndex((item) => item.name === val.name);
      state.tagsList.splice(result, 1);
    }
  }

};
