<template lang="pug">
  nav.nav-bar.border-box.z-0.dt.absolute.dt--fixed.bg-dark-blue(ref="navBar" :class="fixedTopClasses")
    transition(name="inflating")
      router-link.logo.fl.white.no-underline.pointer.mv2(to="/" tag="h1" v-show="scrolled") FCiencias
    ul.main-nav.static-ns.bg-dark-blue.right-0.list.pl0.z-999.db.dtc-ns.v-mid.tr
      nav-menu(
        v-for="(menu, index) in menus"
        :menu="menu"
        :key="index"
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
        console.log("medida del alto de header", headerHeight)
        console.log("se hizo scroll ", this.scrolled)
      },
      navBarToggle () {
        this.mobileMenuIsClosed = !this.mobileMenuIsClosed
      },
      //manage when submenu is open or closed
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
        console.log("entro")
        return {
          'fijar z-999 shadow-3': this.scrolled,
          //'is-closed' : this.mobileMenuIsClosed
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
    transition: all .3s ease-in;
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
  nav.nav-bar{
    display:grid;
    grid-template-columns: 20% 10% 70%;
    grid-gap: 2px;
  }
  nav.nav-bar .logo{
    grid-column-start:1;
    grid-column-end:2;
    align-self: center;
  }
  .main-nav {
    width: 98%;
    max-height: 50em;
    transition: 0.3s ease all;
    list-style: none;
    grid-column-start:3;
    grid-column-end:4;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2px;
  }
 
  .fijar{
    position:fixed;
    top:0;
    overflow: hidden;
    opacity: .98;
    ul{
      opacity: 1;
    }
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
