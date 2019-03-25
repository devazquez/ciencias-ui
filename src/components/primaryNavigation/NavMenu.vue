<template lang="pug">
  li.w-auto-ns.w-90.dib.relative-ns.tc.hover-bg-gold
    router-link.nav-links.white.no-underline.f5.pa2.b.w-80.dib(:to='menu.href') {{ menu.name }}
      
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
