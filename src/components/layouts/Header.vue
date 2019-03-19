<template lang="pug">
  header.white.mw-100.sans-serif.bg-dark-blue
    .container-header.ph6-l.ph5-m.ph3.pv3.cf
      img.h3.w3.fl.pr2.db-l.dn-m.dn(id='escudoFC' :src ='fcEscudo')
      div.db-l.dn-m.dn.fl.f6
        p.ma0.b Facultad de Ciencias
      .flex.justify-end.justify-end-l.justify-center-m.justify-center 
        img(id='escudoUNAM' :src ='unamEscudo')
    //navigation bar component
    navigation-bar(:menus="menus")
</template>

<script>
  // import component, @ refers to the src directory
  import imageCiencias from '@/assets/images/fcescudo.png'
  import imageUNAM from '@/assets/images/escudo_unam@2x.png'

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
