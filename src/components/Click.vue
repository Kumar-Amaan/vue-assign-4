 <template>
  
    <h1 @click="Increment">Clicked {{ count }} times</h1>
  
</template>

<script>
import CounterMixin from '../mixin/counter'
export default {
  name: "Click",
  mixins:[CounterMixin],
  
};
</script>

<style>

</style>