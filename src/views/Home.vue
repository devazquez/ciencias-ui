<template lang="pug">
  .pruebaContenedor
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
<style scoped lang="scss">
  //styles
  $goldUnam:#c5911e;
  .pruebaContenedor{
    width: 90%;
    border: 1px solid #193455;
    .unamGoldColor.bold{
      font-weight: 900;
    }
    .unamGoldColor{
      color:$goldUnam;
      &.bold{
        font-weight: 600;
      }
    }
  }

</style>
