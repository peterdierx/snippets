// DISPATCH ACTIONS
import api from '@/services/api'

export default {
  
  // CREATE
  async newSnippet( { commit }, snippet ) {
    const response = await api.newSnippet( snippet )
    commit( 'NEW_SNIPPET', response.data )
  },

  // READ
  async snippets( { commit } ) {
    const response = await api.getSnippets()
    commit( 'SNIPPETS', response.data )
  },

  // UPDATE
  async update( { commit }, snippet ) {
    const response = await api.updateSnippet( snippet )
    commit( 'UPDATE_SNIPPET', response.data )
  },

  // DELETE
  async delete( { commit }, id ) {
    const response = await api.deleteSnippet( id )
  },
  
  // PAGINATE
  async paginate( { commit }, page ) {
    const response = await api.paginate( page )
    commit( 'SNIPPETS', response.data )
  }
  
}
