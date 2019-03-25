<template lang="pug">
  li.w-auto-ns.w-100.dib.relative-ns.tc.hover-bg-gold
    router-link.nav-links.white.no-underline.f6.pa3.b.w-100.dib(
    :to='menu.href'
    ) {{ menu.name }}
      
</template>

<script>
  
  export default {
    name: 'NavMenu',
    props: {
      menu: Object,
      active: Boolean
    },
  }
</script>

<style lang="scss" scoped>
  /*active link menu classes*/
  .router-link-active {
    background-color: $gold;
    cursor: pointer;
  }
</style>
