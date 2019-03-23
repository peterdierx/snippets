<template>
  <div>
    <AppHeader/>
    <AppMenu/>
    <SnippetList/>
  </div>
</template>

<script>
  import AppHeader   from '@/components/AppHeader'
  import AppMenu     from '@/components/AppMenu'
  import SnippetList from '@/components/SnippetList'

  export default {
    name: 'App',
    components: { AppHeader, AppMenu, SnippetList }
  }
</script>
