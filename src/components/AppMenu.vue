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
            <p class='control'>
              <input class='input' placeholder='Search...'>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'AppMenu',
    methods: {
      snippets() {
        this.$store.commit( 'RESET_PAGE' )
        this.$store.dispatch( 'snippets' )
        this.$router.push( '/' )
      }
    }
  }
</script>
