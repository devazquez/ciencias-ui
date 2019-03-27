<template lang="pug">
#app.vh-100.wrapperTemplate
  //Header component
  Header
  .container.center.w-80-l.w-80-m.w-90.pa2-l.pa1.mv2.cf.tc
   transition(
      name="fade"
      mode="out-in"
      @beforeLeave="beforeLeave"
      @enter="enter"
      @afterEnter="afterEnter"
      )
      router-view 
  Footer 
</div>
    
    
</template>

<script>
  import Header from '@/components/layouts/Header.vue'
  import Footer from '@/components/layouts/Footer.vue'

  export default {
    name: 'App',
    components: {
      Header,
      Footer
    },
    data: function () {
      return {
      }
    },
    methods: {
      // get height of the current page and save it in prevHeight variable
      beforeLeave(element) {
        this.prevHeight = getComputedStyle(element).height;
      },
      // activate transition of the height of the new page (router link)
      enter(element) {
        const { height } = getComputedStyle(element);
        element.style.height = this.prevHeight;
        setTimeout(() => {
          element.style.height = height;
        });
      },
      // set height of the page, in case new content is rendered
      afterEnter(element) {
        element.style.height = 'auto';
      },
    },
  }
</script>

<style  lang="scss" >
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    .logoTexto{
      font-family: "Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif;;
      text-transform: uppercase;
      font-size: 3rem;
      letter-spacing: 8px;
      color: #FFF;
      text-shadow: 0 2px 2px #5683D8 , 0px -2px 1px #F2F2F2;
      text-shadow: 0 2px 5px #c4b59d, 0px -2px 1px #fff;
      font-weight: bold;
      letter-spacing: -4px;
      text-align: center;
      background: linear-gradient(to bottom, #5683D8 0%, #6C96DE 100%);
      //background: linear-gradient(to bottom, #ece4d9 0%,#e9dfd1 100%);
      position: relative;
      padding: 20px 20px;
      margin-top:10px;
      top: 10%;
      left: 50%;
      transform: translate(-50%,-50%);
      border-radius: 0px;
    }
    #escudo{
      width:150px;
      height:auto;
    }
  }
   /* global styles */
  #app {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 100%;
  }
  .container {
    box-shadow: 0px 1px 4px $black-20;
    flex: 1 0 auto;
  }
  /* transition styles */
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: height, opacity;
    transition-timing-function: ease;
    overflow: hidden;
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>
