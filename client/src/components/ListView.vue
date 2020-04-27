<template>
<div>
    <ul class="list-group">
        <li v-for="i in 1000" :key="i"  class="list-group-item">{{ i }} An instance where a producer would be put</li>
    </ul>
</div>
    
</template>

<script>
export default {
   name: 'ListView' , 
   data() {
       return {
           items : [1, 2, 3]
       }
   }
}
</script>

<style>

</style>