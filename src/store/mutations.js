// COMMIT MUTATIONS
export default {

  SNIPPETS( state, payload ) {
    state.snippets = payload
  },

  NEW_SNIPPET( state, payload ) {
    state.recid    = payload.id
    state.snippets = []
    state.snippets.push( payload )
  },

  UPDATE_SNIPPET( state, payload ) {
    const snippet   = state.snippets.find( snippet => snippet.id === payload.id )
    snippet.title   = payload.title
    snippet.content = payload.content
  },

  INCREMENT_PAGE( state ) {
    state.page++
  },

  DECREMENT_PAGE( state ) {
    state.page--
  },

  RESET_PAGE( state ) {
    state.page = 0
  }

}
