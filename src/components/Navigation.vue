<template>
  <div id="side-navigation">
    <ul>
      <li @click="redirect(item.title)" class="menu-item" v-for="(item , index) in items" :key="index">
        {{item.title}}
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: 'Navigation',
    data () {
      return {
        items: [
          {title: 'Page 1', redirect: ''},
          {title: 'Page 2', redirect: ''},
          {title: 'Page 3', redirect: ''},
        ],
        right: null,
        msg: 'Navigation'
      }
    },
    beforeMount () {
    },
    methods: {
      redirect (page) {
        var evt = new CustomEvent('redirect', {detail: page})
        window.dispatchEvent(evt)
      }
    },
  }
</script>
<style scoped>

  .menu-item:hover {
    background: green;
  }

  .menu-item {
    list-style: none;
    border: 1px solid black;
    padding: 5px;
    height: 30px;
  }

</style>
