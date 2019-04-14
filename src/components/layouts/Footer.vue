<template lang="pug">
  footer.white.mw-100.ph6-l.ph5-m.ph3.f6.bg-dark-blue.bt.bb.b--gold.bw2
    .container-footer.tc.pv2
      img.fl.pr2(id='leyendaUNAM' :src ='leyendaUNAM')
</template>

<script>
import leyendaUNAM from '@/assets/images/unam-nacion.png'
  export default {
    name: 'Footer',
    data: function () {
      return {
        leyendaUNAM: leyendaUNAM,
      }
    },
  }
</script>

<style lang="scss">

footer .container-footer{ 
  img{
    width:6rem;
    height:auto;
  }
}
</style>
