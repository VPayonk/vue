<template>
    <div>
        <h3>
            {{ carName }} : {{ carYear }}
        </h3>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        carName: 'Ford',
        carYear: 2015
      }
    }
  };
</script>

<style lang="scss">

</style>