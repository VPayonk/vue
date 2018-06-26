<template>
    <div class="car">
        <h3>
            Name : {{ carName }} | {{ revertName }}
        </h3>
        <p>
            Year : {{ carYear }}
        </p>
        <button @click="changeName">Change name</button>
    </div>
</template>

<script>
  export default {
    // props: ['carName', 'carYear'],
    // props: {
    //   carName: String,
    //   carYear: Number
    // },
    props: {
      carName: {
        type: String,
        required: true,
        default: 'Default name'
      },
      carYear: Number
    },
    methods: {
      changeName() {
        this.carName = 'Mazda'
        this.$emit('nameChanged', this.carName)
      }
    },
    computed:  {
      revertName() {
        return this.carName.split('').reverse().join('');
      }
    }
  };
</script>

<style lang="scss">
    .car {
        border: 1px solid black;
        padding: 10px;

        h3 {
            margin-bottom: 25px;
        }
    }
</style>