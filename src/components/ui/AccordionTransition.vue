<template lang="pug">
  transition(
  name="slide-down"
  @enter="enter"
  @after-enter="afterEnter"
  @leave="leave"
  )
    slot
</template>

<script>
  export default {
    name: 'AccordionTransition',
    methods: {
      enter (element) {
        // necessary styles for obtain auto height and save it
        element.style.width = getComputedStyle(element).width;
        element.style.position = 'absolute';
        element.style.visibility = 'hidden';
        element.style.height = 'auto';
        const height = getComputedStyle(element).height;

        // set initial styles and force repaint to make sure the animation is triggered correctly.
        element.style.width = null;
        element.style.position = null;
        element.style.visibility = null;
        element.style.height = 0;
        getComputedStyle(element).height;

        /* set final height into the setTimeout function to make sure
        the browser has finished painting after setting the `height` */
        setTimeout(() => {
          element.style.height = height
        })
      },
      afterEnter (element) {
        element.style.height = 'auto'
      },
      leave (element) {
        element.style.height = getComputedStyle(element).height;

        // Force repaint to make sure the
        // animation is triggered correctly.
        getComputedStyle(element).height;

        setTimeout(() => {
          element.style.height = 0
        })
      },
    }
  }
</script>

<style scoped lang="scss">
  /*optimize the animation of the element*/
  * {
    will-change: height;
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000px;
  }

  /* styling to transition element */
  .slide-down-enter-active,
  .slide-down-leave-active {
    transition: height 500ms ease-in-out;
    transition-property: opacity, height;
    overflow: hidden;
  }
  .slide-down-enter,
  .slide-down-leave-to {
    height: 0;
    opacity: 0;
  }
</style>
