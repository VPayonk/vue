<template>
   <div>
       <h2>{{ title }}</h2>
       <h2>{{ title | lowercase}}</h2>
       <h2>{{ title | uppercase}}</h2>
       <h2>{{ title | uppercase | lowercase}}</h2>

       <ul>
           <li v-for="name in filteredNames">{{ name }}</li>
       </ul>
       <input type="text" v-model="searchName">
   </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello i`m Vue',
        names: ['Name1', 'Name2', 'Name3', 'Name4'],
        searchName: ''
      }
    },
    computed: {
      filteredNames() {
        return this.names.filter(name => {
          return name.toLowerCase().indexOf(this.searchName.toLowerCase()) != -1
        })
      }
    },
    filters: {
      lowercase(value) {
        return value.toLowerCase()
      }
    }
  };
</script>

<style scoped>

</style>