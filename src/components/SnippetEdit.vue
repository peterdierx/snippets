<template>
  <div>
    <!-- FORM -->
    <form @submit.prevent='update'>
      <!-- TITLE -->
      <div class='field'>
        <p class='control'>
          <input ref='title' class='input' type='text' v-model='snippet.title'>
        </p>
        <p v-show='titleValidate' class='help is-danger'>Snippet must have a title</p>
      </div>
      <!-- CONTENT -->
      <div class='field'>
        <p class='control'>
          <textarea class='textarea' v-model='snippet.content'></textarea>
        </p>
      </div>
      <!-- CANCEL UPDATE DELETE-->
      <div class='field is-grouped'>
        <p class='control'>
          <!-- CANCEL -->
          <button type='button' class='button is-success' @click='cancel'>
            Cancel
          </button>
        </p>
        <p class='control'>
          <!-- UPDATE -->
          <button class='button is-link'>
            Update
          </button>
        </p>
        <p class='control'>
          <!-- DELETE -->
          <button type='button' class='button is-warning' v-show='deleteButton' @click='deleteSnippet'>
            Delete
          </button>
        </p>
        <p class='control'>
          <!-- CONFIRM -->
          <button type='button' class='button is-danger' v-show='confirmButton' @click='deleteSnippetConfirm( snippet.id )' style='margin-left:-12px'>
            Confirm
          </button>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'SnippetEdit',
    props: {
      recid: {
        type: Number
      }
    },
    created() {
      this.loadSnippet( this.recid )
    },
    data() {
      return {
        snippet: {
          id:      null,
          title:   null,
          content: null,
        },
        deleteButton:  true,
        confirmButton: false,
        titleValidate: false
      }
    },
    methods: {
      loadSnippet( recid ) {
        this.snippet = this.$store.state.snippets.find( snippet => snippet.id === recid )
      },
      update() {
        if ( this.snippet.title ) {
          const snippet = {
            id:      this.recid,
            title:   this.snippet.title,
            content: this.snippet.content
          }
          this.$store.dispatch( 'update', snippet ).then( () => {
            this.$router.push( { name: 'show', params: { recid: this.recid } } )
          })
        } else {
          this.titleValidate = true
          this.$refs.title.focus()
        }
      },
      cancel() {
        this.$router.push( { name: 'show', params: { recid: this.recid } } )
      },
      deleteSnippet() {
        this.deleteButton  = false
        this.confirmButton = true
      },
      deleteSnippetConfirm( id ) {
        this.$store.dispatch( 'delete', id ).then( () => {
          this.$store.dispatch( 'paginate', this.$store.state.page )
          this.$router.push( '/' )
        })
      }
    }
  }
</script>
