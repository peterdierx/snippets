<template>
  <div>
    <!-- TITLE -->
    <div class='field'>
      <p class='control'>
        <input class='input' type='text' v-model='snippet.title' readonly>
      </p>
    </div>
    <!-- CONTENT -->
    <div class='field'>
      <pre>{{ snippet.content }}</pre>
    </div>
    <div class='field is-grouped'>
      <!-- EDIT -->
      <p class='control'>
        <router-link class='button is-link' :to="{ name: 'edit', params: { recid: snippet.id } }">
          Edit
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SnippetShow',
    props: {
      recid: {
        type: Number
      }
    },
    created() {
      this.loadSnippet( this.recid )
    },
    beforeRouteUpdate( to, from, next ) {
      this.loadSnippet( to.params.recid )
      next()
    },
    data() {
      return {
        snippet: {
          id:      null,
          title:   null,
          content: null
        }
      }
    },
    methods: {
      loadSnippet( id ) {
        const snippet = this.$store.state.snippets.find( snippet => snippet.id === id )
        this.snippet  = { ...snippet }
      }
    }
  }
</script>
