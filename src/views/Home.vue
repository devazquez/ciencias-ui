<template lang="pug">
  .pruebaContenedor.w-100.center.tc
    h1 {{ msg }}
    p {{ descripcion }}
    #gridSpringboard.vh-100.center.pa2-l.pa1 
      div 
        | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        
      div 
        | Maecenas feugiat luctus enim a porttitor. Vivamus dapibus
        
      div 
        | Aenean porta venenatis consectetur. Class aptent taciti.
        
      div 
        | Nullam ac condimentum dui, porttitor egestas turpis.
        
      div
        | Fusce facilisis, odio nec viverra tempus, eros arcu blandit nisi.
        
      div 
        | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        
      div 
        | Maecenas feugiat luctus enim a porttitor. Vivamus dapibus
        
      div 
        | Aenean porta venenatis consectetur. Class aptent taciti.
        
      div 
        | Nullam ac condimentum dui, porttitor egestas turpis.
        
      div
        | Fusce facilisis, odio nec viverra tempus, eros arcu blandit nisi.
        
      div 
        | Nullam ac condimentum dui, porttitor egestas turpis.
        
      div
        | Fusce facilisis, odio nec viverra tempus, eros arcu blandit nisi.
    
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      min: 0,
      max:360,
      msg: 'Patrón Springboard',
      descripcion: 'El patrón Springboard, también llamado Launchpad, fue el patrón de navegación más popular en 2011. Este diseño es una pantalla de inicio con opciones que actúan como puntos de inicio en la aplicación.'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
  //styles
  .pruebaContenedor{
    border: 1px solid $orange;
    .unamGoldColor.bold{
      font-weight: 900;
    }
    .unamGoldColor{
      color:$gold;
      &.bold{
        font-weight: 600;
      }
    }
    #gridSpringboard {
      display:grid;
      width:98%;
      grid-template-columns: 24% 24% 24% 24%;
      grid-template-rows: 33% 33% 33%;
      grid-gap: 1.3%;
      grid-row-gap: 2%;
      border:1px solid $blue;
      overflow-wrap: break-word;
    }
    div{
      border:1px solid $red;
    }
  }
</style>
