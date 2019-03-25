<template lang="pug">
  .pruebaContenedor.tc
    h1 {{ msg }}
      .cosa1.left.unamGoldColor Cosa1
      .cosa2.left.unamGoldColor.bold Cosa2
    p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin risus tortor. In libero diam, auctor vel semper id, porttitor a diam. Vivamus ultrices tincidunt nulla a venenatis. Morbi vulputate est metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum vitae sem ut imperdiet. Mauris in volutpat nisi. Aenean ac sem viverra, fermentum ex quis, pellentesque justo. Aenean a sollicitudin turpis. In erat lacus, fermentum eu interdum vel, posuere nec neque. Vestibulum egestas massa a elit iaculis, nec fermentum ligula vestibulum. Duis quis nisl fermentum, semper nunc ac, feugiat mauris. Duis vel magna velit. Aenean aliquet dictum venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean vitae tristique libero.

    p Maecenas feugiat luctus enim a porttitor. Vivamus dapibus, sapien quis finibus suscipit, nisl arcu dictum nisi, a porttitor nisi ipsum vel magna. Curabitur blandit tortor nec pellentesque hendrerit. Sed mattis mi eget ex maximus, eget aliquet erat varius. Phasellus ut nunc vel sem gravida hendrerit. Vestibulum gravida egestas euismod. Pellentesque eget iaculis magna. Quisque eleifend, mi vitae posuere molestie, diam velit aliquet ante, non luctus libero erat ut tortor. Donec odio eros, elementum non lacus vel, vulputate gravida ex. Nam lobortis accumsan urna ullamcorper laoreet. Nam ut mi ac tortor efficitur tempor id sit amet eros. Praesent eget ornare massa, nec commodo dui. In rhoncus lacinia orci quis ultricies. Maecenas eget euismod ante.

    p Aenean porta venenatis consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque finibus orci quis tincidunt elementum. Aliquam euismod vulputate ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis et nulla augue. Nullam sed ornare ante, iaculis varius velit. Nulla tincidunt imperdiet elit, ut porttitor odio fermentum efficitur. Suspendisse porttitor, magna vel convallis lacinia, elit nibh fringilla dui, in vulputate lacus augue pretium diam. Donec quis est justo. Maecenas faucibus elit massa, in fringilla orci blandit nec. Cras fermentum enim eu convallis venenatis. Morbi sodales tortor at egestas feugiat.

    p Nullam ac condimentum dui, porttitor egestas turpis. Nullam bibendum mi et libero tincidunt tristique. Mauris eu semper elit, vitae aliquam felis. Nullam semper auctor ullamcorper. Maecenas a nibh nec justo hendrerit ullamcorper. Suspendisse non leo turpis. Morbi consectetur, orci id viverra elementum, risus nunc eleifend dui, ac commodo arcu justo at mauris. Sed convallis erat ut accumsan scelerisque. Aliquam euismod odio eget ligula dictum, et auctor augue blandit. Aenean erat turpis, lobortis vitae urna vel, auctor ornare nisi. Suspendisse mollis facilisis cursus. Morbi consequat dapibus felis, quis tincidunt augue. Donec vitae faucibus quam. Nulla facilisi. Pellentesque volutpat urna sit amet gravida vestibulum. Ut ligula ipsum, dapibus non arcu ut, luctus posuere lacus.

    p Fusce facilisis, odio nec viverra tempus, eros arcu blandit nisi, ac porta tortor velit eu est. Aliquam dignissim, mi non aliquet vestibulum, nibh enim porta mi, et viverra lectus nisi ac mi. Pellentesque a scelerisque dui, ac semper est. Aenean iaculis nisl in convallis congue. Duis nec metus non eros feugiat consequat quis ut ligula. Nullam rhoncus velit ut nibh luctus, at tristique mi tristique. Ut condimentum, ante tristique ultrices auctor, nunc tellus ornare velit, in blandit mi est quis leo. Sed eleifend mi purus, ut ultrices sem porta feugiat. Morbi vitae diam rhoncus, auctor nulla nec, suscipit quam. Morbi posuere tristique feugiat. Nulla facilisi. Cras malesuada tincidunt hendrerit.
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
