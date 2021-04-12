 <template>
  <div>
    <br><br><br>
    <hr>
    <h1>Watcher</h1>
    <hr>
    <h1>{{count}}</h1>
    <button id="watcher" @click="count=count+1">+</button>
    <button  id="watcher1" @click="count=count-1">-</button>
  </div>
</template>

<script>
export default {
  name: "Watcher",
  data() {
    return {
      count: 0,
    };
  },
  watch:{
    count(val,prev)
    {
      if(val>5 && val>prev)
      {
        this.count=0
      }
    }
  }

 
};
</script>

<style>
#watcher{
  left: -4px;
    top: 48px;
    background-color: yellow;
    color: black;
}
#watcher1{
  left: -4px;
    top: 48px;
    background-color: yellow;
    color: black;
}
</style>