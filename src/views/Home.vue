<template lang="pug">
  .pruebaContenedor.tc
    h1 {{ msg }}
      .cosa1.left.unamGoldColor Cosa1
      .cosa2.left.unamGoldColor.bold Cosa2

    div {{ this.mensaje }}
    
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Inicio',
      mensaje: 'Están listos chicos!!!',
      respuesta: 'Si capitán estamos listos',
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
  //styles
  .pruebaContenedor{
    width: 90%;
    border: transparent;
    .unamGoldColor.bold{
      font-weight: 900;
    }
    .unamGoldColor{
      color:$gold;
      &.bold{
        font-weight: 600;
      }
    }
  }

</style>
