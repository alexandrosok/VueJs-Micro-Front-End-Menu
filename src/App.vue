<template>
  <div id="menu">
    <Navigation/>
  </div>
</template>
<script>

  import Navigation from './components/Navigation.vue'

  export default {
    name: 'MenuApp',
    components: {
      Navigation
    }
  }

</script>

<style>

  #menu {
    width: 30%;
  }

</style>
