
<template lang="pug">
  .pruebaContenedor.w-100.center.tc
    h1 {{ msg }}
    p {{ descripcion }}
    #gridSpringboard.vh-100.center.pa2-l.pa1 
      div.cosa(v-for="evento in listaEventos")
        p {{ evento.titulo }}
        p {{ evento.ubicacion }}
      
</template>

<script>
import dataJson from '@/assets/data/eventos.json'

export default {
  name: 'eventos',
  data () {
    return {
      listaEventos: '',
      msg: 'Patrón de Lista',
      descripcion: 'El patrón list, En lugar de utilizar el espacio horizontal de manera ineficiente, muestra un conjunto de información verticalmente utilizando el espacio asignado completo.',
    }
  },
  methods:{
    aleatorio: function(a,b) {
      return Math.round(Math.random()*(b-a)+parseInt(a));
    },
    setListaEventos: function(){
      this.listaEventos = this.dataJson
      console.log('lista de eventos ', this.dataJson)
    }
  },
  mounted(){
    this.setListaEventos();
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
      grid-template-rows: 32% 32% 32%;
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
