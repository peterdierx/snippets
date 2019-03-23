<template>
  <div>
    <AppHeader/>
    <AppMenu/>
  </div>
</template>

<script>
  import AppHeader from '@/components/AppHeader'
  import AppMenu   from '@/components/AppMenu'

  export default {
    name: 'App',
    components: { AppHeader, AppMenu }
  }
</script>
