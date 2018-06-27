<template>
    <div>
        <!--<h2>{{ carName }}</h2>-->
        <slot name="title"></slot>
        <hr>
        <hr>
        <slot name="text"></slot>
    </div>
</template>

<script>
  export default {
    // props: ['carName']
  };
</script>

<style scoped lang="scss">
    div {
        border: 1px solid black;
        padding: 20px;
    }
    h2 {
        color: red;
    }
</style>