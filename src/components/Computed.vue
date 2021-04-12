<template>
<div>

<br>

     <h1>Computed Property</h1>


<hr>
<br><br><br>



  <h2>{{ getResult}}</h2>
</div>
 
</template>

<script>
export default {
name:'Computed',





data() {
    return {
      dollars: 100,
      rupeeVal: 70,
      discount: 10,
}
},
computed:{
    getResult()
    {
      return ( this.dollars * this.rupeeVal )- this.discount ;
    }
  }
}

</script>

<style>
</style>