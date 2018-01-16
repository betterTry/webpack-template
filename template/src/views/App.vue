{{#if pug}}<template lang="pug">
  .hello hello world
</template>
{{else}}
<template>
  <div class="hello">hello world</div>
</template>
{{/if}}
<script {{#typescript}}lang="ts"{{/typescript}}>
export default {
  name: 'hello',
  data() {
    return {},
  },
};
</script>
<style lang="scss">

</style>
