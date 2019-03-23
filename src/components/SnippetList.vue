<template>
  <section class='section' style='margin-top:-70px;height:300px' >
    <div class='container'>
      <div class='columns'>
        <div class='column is-3'>
          <div class='box'>
            <ul style='height:300px'>
              <SnippetItem v-for='snippet in snippets'
                :key='snippet.id'
                :id='snippet.id'
                :itemtitle='snippet.title'
                style='height:30px'
              />
            </ul>
            <button :disabled='this.$store.state.page == 0' class='button is-success' style='margin-top:10px' @click='previousPage'>
              <
            </button>
            &nbsp;
            <button :disabled='this.$store.getters.snippetsCount < 11' class='button is-success' style='margin-top:10px' @click='nextPage'>
              >
            </button>
          </div>
        </div>
        <div class='column'>
          <div class='box'>
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import SnippetItem from '@/components/SnippetItem'

  export default {
    components: { SnippetItem },
    name: 'SnippetList',
    computed: {
      snippets() {
        return this.$store.state.snippets.slice( 0, 10 )
      }
    },
    methods: {
      previousPage() {
        this.$store.commit( 'DECREMENT_PAGE' )
        this.$store.dispatch( 'paginate', this.$store.state.page )
      },
      nextPage() {
        this.$store.commit( 'INCREMENT_PAGE' )
        this.$store.dispatch( 'paginate', this.$store.state.page )
      }
    }
  }
</script>
