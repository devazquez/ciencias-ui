<template lang="pug">
  header.white.mw-100.sans-serif.bg-dark-blue
    .container-header.ph2-l.ph3-m.ph2.pv3.cf
      .escudo-FC
        img.fl.pr2(id='escudoFC' :src ='fcEscudo')
      .headerContent.fl.pr2.f6
        p.ma0.b.f3.lh-title  Universidad Nacional Autónoma de México
        p.ma0.b.f3.lh-subtitle  Facultad de Ciencias

      .escudo-UNAM
        img.fr.pr2(id='escudoUNAM' :src ='unamEscudo')
    //navigation bar component
    navigation-bar(:menus="menus")
</template>

<script>
  // import component, @ refers to the src directory
  import imageCiencias from '@/assets/images/fcescudo.png'
  import imageUNAM from '@/assets/images/logos unam-fm blanco.png'

  import NavigationBar from '@/components/primaryNavigation/NavigationBar.vue'

  const menuData = [
    {
      name: 'Inicio',
      href: '/inicio',
      children: []
    },
    {
      name: 'Galería',
      href: '/galeria',
      children: []
    },
    {
      name: 'Acerca',
      href: '/acerca',
      children: []
    },
    {
      name: 'Menú',
      href: '#',
      children: [
        {
          name: 'Configuración',
          href: '/conf'
        },
        {
          name: 'Salir',
          href: '/salir'
        }
      ]
    }
  ]
  export default {
    name: 'Header',
    data: function () {
      return {
        fcEscudo: imageCiencias,
        unamEscudo: imageUNAM,
        menus: menuData
      }
    },
    components: {
      NavigationBar
    }
  }
</script>
<style lang="scss">

.container-header{
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 2px;
}
.escudo-FC{
  grid-column-start:1;
  grid-column-end:2;
  img{
    width:6rem;
    height:6rem;
  }
}
.headerContent{
  grid-column-start:2;
  grid-column-end:10;
  text-align: left;
  align-self: center;
}
.escudo-UNAM{
  grid-column-start:10;
  grid-column-end:11;
  img{
    width:6rem;
    height:auto;
  }
}

</style>

