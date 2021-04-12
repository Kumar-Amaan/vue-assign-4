<template>
  <div>

   

    <br />
    <h1>Home</h1>
    <br />
    <hr />
    <br />
    <p><router-link to="/user/1"> Aman</router-link></p>
    <br />
    <hr />

    <!-- <Header name="Home" /> -->
    <h2>{{ val }}</h2>
    <div id="true" v-if="(val = true)">
      App will run if every code is {{ val }}
    </div>

    <div id="area" v-for="(item, index) of records" :key="index">
      Language Name : {{ item.language1 }} and it will take {{ item.Time }}
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  //   components: {
  //     Header,
  //   },
  data() {
    return {
     
      val: true,
      records: [
        { language1: "HTML5", Time: 15 },
        { language1: "CSS", Time: 10 },
        { language1: "Bootstrap", Time: 5 },
        { language1: "Javascript", Time: 30 },
        { language1: "React", Time: 20 },
        { language1: "Vue", Time: 8 },
      ],
    };
  },
 
  
};
</script>
<style>
#true {
  background-image: linear-gradient(rgb(112, 67, 67), rgb(142, 218, 253));
  color: rgb(21, 22, 8);
}
/* #listing {
  background-image: linear-gradient(
    to right,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  );
  color: rgb(8, 7, 8);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 20px;
    width: 100%;
  height: 50%;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
}
@keyframes listing {
  0%   {background-color: red;}
  25%  {background-color: yellow;}
  50%  {background-color: blue;}
  100% {background-color: green;}
} */
</style>