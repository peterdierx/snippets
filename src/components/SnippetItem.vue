<template>
  <li style='height:30px'>
    <router-link :to="{ name: 'show', params: { recid: id } }">
      {{ itemtitle }}
    </router-link>
  </li>
</ul>

</template>

<script>
  export default {
    name: 'SnippetItem',
    props: {
      id:        Number,
      itemtitle: String
    }
  }
</script>
