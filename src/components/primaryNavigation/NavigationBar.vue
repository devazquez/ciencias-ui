<template lang="pug">
  nav.nav-bar.ph6-l.ph4-m.ph3.w-100.dt.dt--fixed.border-box.z-0(ref="navBar" :class="fixedTopClasses")
    transition(name="inflating")
      router-link.logo.fl.white.no-underline.pointer.mv2(to="/" tag="h1" v-show="scrolled") FCiencias
    a.nav-bar-toogle.fr.dim.grow.br4.ba.white.ph3.pv2.mv2.dn-ns.f5(@click="navBarToggle")
      | {{ mobileMenuIsClosed ? "Menú" : "Cerrar" }}
    ul.main-nav.absolute.static-ns.w-100.bg-dark-blue.right-0.list.pl0.z-999.db.dtc-ns.v-mid.tr.overflow-hidden
      nav-menu(
      v-for="(menu, index) in menus"
      :menu="menu"
      :key="index"
      :active="index === activeSubmenu"
      @click.native="setActiveSubmenu(index)"
      )
</template>

<script>
  import AccordionTransition from '@/components/ui/AccordionTransition'
  import NavMenu from '@/components/primaryNavigation/NavMenu.vue'

  export default {
    name: 'NavigationBar',
    props: { menus: Array },
    components: { NavMenu, AccordionTransition },
    data() {
      return {
        scrolled: false,
        mobileMenuIsClosed: true,
        activeSubmenu: null
      }
    },
    methods: {
      // set navigation bar on top of screen when scrolled window
      handleScroll () {
        let headerHeight = this.$refs.navBar.clientHeight;
        this.scrolled = (window.pageYOffset >= headerHeight)
      },
      navBarToggle () {
        this.mobileMenuIsClosed = !this.mobileMenuIsClosed
      },
      // manage when submenu is open or closed
      setActiveSubmenu: function (index) {
        // if item has selected again
        let hasSelected = this.activeSubmenu === index
        // if yes, close submenu, else open submenu
        this.activeSubmenu = hasSelected ? null : index
      },
      // close submenu when click outside of the navigation bar
      documentClick(e) {
        let el = this.$refs.navBar;
        let target = e.target
        if (( el !== target) && !el.contains(target)) {
          this.activeSubmenu=null
        }
      }
    },
    computed: {
      // set visible nav-bar when scrolling page
      fixedTopClasses: function () {
        return {
          'fixed top-0 z-1 bg-dark-blue shadow-3': this.scrolled,
          'is-closed' : this.mobileMenuIsClosed
        }
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll)
      document.addEventListener('click', this.documentClick)
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
      document.removeEventListener('click', this.documentClick)
    }
  }
</script>

<style lang="scss" scoped>
  /* show text FCiencias effect */
  .inflating-enter-active, .fade-leave-active {
    transition: all .2s ease-in;
    transform: scale(1);
  }
  /* disappear text FCiencias effect */
  .inflating-enter, .fade-leave-to {
    font-size: 0;
    margin-left: 0;
    transition: all .3s ease-out;
    transform: scale(0);
  }
  /* nav-menu transition styles */
  .is-closed .main-nav {
    max-height: 0;
  }
  .main-nav {
    max-height: 50em;
    transition: 0.3s ease all;
    margin-top: 50px;
  }
  @media #{$breakpoint-large} {
    .main-nav {
      overflow: visible;
    }
  }
  @media #{$breakpoint-medium} {
    .main-nav {
      overflow: visible;
    }
  }
</style>
