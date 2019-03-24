<template>
  <div>
    <!-- FORM -->
    <form @submit.prevent='newSnippet'>
      <!-- TITLE -->
      <div class='field'>
        <p class='control'>
          <input ref='title' v-focus class='input' type='text' v-model='snippet.title' placeholder='Title'>
        </p>
        <p v-show='titleValidate' class='help is-danger'>Snippet must have a title</p>
      </div>
      <!-- CONTENT -->
      <div class='field'>
        <p class='control'>
          <textarea class='textarea' v-model='snippet.content' placeholder='Content'></textarea>
        </p>
      </div>
      <!-- SAVE / CANCEL-->
      <div class='field is-grouped'>
        <p class='control'>
          <!-- SAVE -->
          <button class='button is-link'>
            Save
          </button>
        </p>
        <p class='control'>
          <!-- CANCEL -->
          <button type='button' class='button is-success' @click='cancel'>
            Cancel
          </button>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'SnippetNew',
    data() {
      return {
        snippet: {
          title:   null,
          content: null,
        },
        titleValidate: false
      }
    },
    methods: {
      newSnippet() {
        if ( this.snippet.title ) {
          const snippet = { ...this.snippet }
          this.$store.dispatch( 'newSnippet', snippet ).then( () => {
            this.$router.push( { name: 'show', params: { recid: this.$store.state.recid } } )
          })
        } else {
          this.titleValidate = true
          this.$refs.title.focus()
        }
      },
      cancel() {
        this.$router.push( '/' )
      }
    }
  }
</script>
