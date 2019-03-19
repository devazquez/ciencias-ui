<template lang="pug">
  li.w-auto-ns.w-100.dib.relative-ns.tc.hover-bg-gold
    router-link.nav-links.white.no-underline.f6.pa3.b.w-100.dib(
    :to='menu.href'
    ) {{ menu.name }}
    //show submenu component if exists items
    accordion-transition
      .dropdown-submenu.absolute-ns.bg-dark-blue.right-0.br2.shadow-3(v-if="hasChildren && active")
        nav-menu-submenu(v-for="(submenu, index) in menu.children" :item="submenu" :key="index" )
</template>

<script>
  import NavMenuSubmenu from '@/components/primaryNavigation/NavMenuSubmenu.vue'
  import AccordionTransition from "../ui/AccordionTransition";

  export default {
    name: 'NavMenu',
    props: {
      menu: Object,
      active: Boolean
    },
    components: {
      AccordionTransition,
      NavMenuSubmenu
    },
    data: function () {
      // if element has a submenu
      const hasChildren = this.menu.children.length > 0
      return {
        hasChildren,
      }
    }
  }
</script>

<style lang="scss" scoped>
  /*active link menu classes*/
  .router-link-active {
    background-color: $gold;
    cursor: pointer;
  }
</style>
