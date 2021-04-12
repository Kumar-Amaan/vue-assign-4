 <template>
  <div>
    <h1>Dynamic Class And Styles</h1>
    <h2 class="staticClass" :class="adjustStyle" >Dynamic Component</h2>
    <button @click="colorful = !colorful">Apply Style</button>
  </div>
</template>

<script>
export default {
  name: "Dynamic",

  data() {
    return {
      colorful: false,
    };
  },
  computed:{
      adjustStyle(){
          return{
              green:this.colorful,
              err: true,
              other:true
          }
      }
  }
};
</script>

<style>
h1 {
  color: violet;
}
.other{
    font-size: 30px;
}

.green {
  background-color: #fff;
  width: 220px;
  padding: 10px;
  color: yellow;
}
.err{
    color: red;
}
.staticClass {
  color: rgb(128, 68, 240);
}
</style>
