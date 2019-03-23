import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:4567'
})

export default {
  getSnippets() { 
    return apiClient.get( '/snippets' )
  },
  newSnippet( snippet ) {
    return apiClient.post( '/snippets/new', snippet )
  },
  updateSnippet( snippet ) {
    return apiClient.put( '/snippets', snippet )
  },
  deleteSnippet( id ) {
    return apiClient.delete( `/snippets/${ id }` )
  },
  paginate( pageNumber ) {
    return apiClient.get( `/snippets/page/${ pageNumber }` )
  }
}
