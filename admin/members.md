<script setup>
import SearchInterface from '../components/members/SearchInterface.vue'
import ConfigCloud from '../components/members/ConfigCloud.vue'
import ULPCounter from '../components/database/ULPCounter.vue'
</script>

<div class="members-container">
  <ULPCounter />
  <SearchInterface />
  <ConfigCloud />
</div>

<style>
.members-container {
  margin: 2rem 0;
  display: grid;
  gap: 2rem;
}
</style>