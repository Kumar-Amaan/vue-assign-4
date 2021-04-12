 <template>
  <div>
    <h2 @mouseover="Increment">Clicked {{ count }} times</h2>
  </div>
</template>

<script>
import CounterMixin from '../mixin/counter'
export default {
  name: "Hover",
  mixins:[CounterMixin]
  
};
</script>

<style>
</style>