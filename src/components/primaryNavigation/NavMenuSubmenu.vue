<template lang="pug">
  router-link.db.white.no-underline.pv3.ph3.hover-bg-gold(
  :to="item.href"
  ) {{ $t(item.name) }}
</template>

<script>
  export default {
    name: 'NavMenuSubmenu',
    props: { item: Object }
  }
</script>
