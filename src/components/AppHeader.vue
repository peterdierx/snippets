<template>
  <section class='hero is-primary'>
    <div class='hero-body'>
      <div class='container'>
        <h1 v-once class='title'>
          {{ title }}
        </h1>
        <h2 v-once class='subtitle'>
          {{ subtitle }}
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'AppHeader',
    data() {
      return {
        title:    'Snippets',
        subtitle: 'Peter Dierx - 2019'
      }
    }
  }
</script>
