import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pagesCounts: {},
    breadcrumbs: [],
  },
  mutations: {
    M_INCREMENT_PAGE (state, pagename) {
      if (!isNaN(state.pagesCounts[pagename])) {
        state.pagesCounts[pagename] ++;
      } else {
        state.pagesCounts[pagename] = 1;
      }
    },
    M_BREADCRUMBS (state, crumbs) {
      console.log(state.breadcrumbs);
      state.breadcrumbs[crumbs.slug] = crumbs.label;
      // state.breadcrumbs.push(crumbs);
      console.log(state.breadcrumbs);
    },
    M_BREADCRUMBS_REMOVE() {
      // let temp = new Set(state.breadcrumbs);
      // temp.delete(path);
      // state.breadcrumbs = Array.from(temp);
    },
  },
  actions: {
  },
  modules: {
  }
})
