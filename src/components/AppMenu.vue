<template>
  <section class='section' style='margin-top: -25px;'>
    <div class='container'>
      <div class='box'>
        <div class='level'>
          <div class='field is-grouped'>
            <p class='control'>
              <button class='button is-primary' @click='snippets'>Snippets</button>
            </p>
            <p class='control'>
              <router-link :to="{ name: 'new' }">
                <button class='button is-link'>New</button>
              </router-link>
            </p>
            <form @submit.prevent='searchSnippets'>
              <input v-model='search' class='input' placeholder='Search...' autocomplete='off'>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'AppMenu',
    data() {
      return {
        search: null
      }
    },
    methods: {
      snippets() {
        this.$store.commit( 'RESET_PAGE' )
        this.$store.dispatch( 'snippets' )
        this.$router.push( '/' )
      },
      searchSnippets() {
        this.$store.dispatch( 'search', this.search )
        this.search = null
      }
    }
  }
</script>
