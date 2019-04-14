
<template lang="pug">
  .pruebaContenedor.w-100.center.tc
    h1 {{ msg }}
    p {{ descripcion }}
    #listaEventos.center.pa2-l.pa1 
      div.cosa(v-for="evento in listaEventos")
        p {{evento.id}} {{ evento.titulo }}
        p {{ evento.ubicacion }}
</template>

<script>
import dataJson from '../assets/data/eventos.json'

export default {
  name: 'Eventos',
  data () {
    return {
      dataJ: '',
      listaEventos: '',
      msg: 'Patrón de Lista',
      descripcion: 'El patrón list, En lugar de utilizar el espacio horizontal de manera ineficiente, muestra un conjunto de información verticalmente utilizando el espacio asignado completo.',
    }
  },
  methods: {
    setDataJ: function() {
      this.dataJ = dataJson
      console.log("dataJson ", this.dataJ ) 
    },  
    setListaEventos: function() {
      this.listaEventos = this.dataJ['eventos']
    }
  },
  mounted(){
    this.setDataJ();
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
    div{
      border:1px solid $red;
    }
  }
</style>
