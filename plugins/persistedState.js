// Persisting Vuex store to not loose data on refresh
// Ref.: https://stackoverflow.com/questions/43027499/vuex-state-on-page-refresh
// Ref.: https://github.com/robinvdvleuten/vuex-persistedstate#with-local-storage-client-side-only
import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    // key: 'yourkey',
    // ToDo: specify paths to reduce localStorage load
    // paths: ['data']
  })(store)
}
