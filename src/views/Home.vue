
<template lang="pug">
  .pruebaContenedor.w-100.center.tc
    h1 {{ msg }}
    p {{ descripcion }}
    #gridSpringboard.vh-100.center.pa2-l.pa1 
      div.cosa(v-for="index in lmax")
        | {{ index }}
        | {{ loremArray[aleatorio(min, max)].msg}}
      
</template>

<script>
import dataLorem from '@/assets/data/lorem.json'
export default {
  
  name: 'home',
  data () {
    return {
      min:'',
      max:'',
      lmax:'',
      dataL: '',
      loremArray: '',
      msg: 'Patrón Springboard',
      descripcion: 'El patrón Springboard, también llamado Launchpad, fue el patrón de navegación más popular en 2011. Este diseño es una pantalla de inicio con opciones que actúan como puntos de inicio en la aplicación.',
    }
  },
  methods:{
    aleatorio: function(a,b) {
      return Math.round(Math.random()*(b-a)+parseInt(a));
    },
    loadJsonLorem: function(){
      this.dataL = dataLorem;
      console.log("dataL", this.dataL)
      console.log("settings", this.dataL['settings'][0])
      console.log("lorem", this.dataL['loremArray'])
    },
    setSettings: function(){
      this.settings = this.dataL['settings'][0];
      this.min = this.dataL['settings'][0]['min'];
      this.max = this.dataL['settings'][0]['max'];
      this.lmax = this.dataL['settings'][0]['lmax']
    },
    setLoremArray: function(){
      this.loremArray = this.dataL['loremArray']
      console.log('loremArray ', this.loremArray)
    }
  },
  mounted(){
    this.loadJsonLorem();
    this.setSettings();
    this.setLoremArray();
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
