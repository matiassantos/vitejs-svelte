<script lang="ts">
  import Counter from './Counter.svelte';
  import UuidGenerator from './UuidGenerator.svelte';
  import IceAndFireAPI from '../pages/IceAndFireAPIConsumer.svelte';
</script>

<div>

  <div class="card">
    <Counter />
  </div>
  <div class="card">
    <UuidGenerator />
  </div>
  <div class="card">
    <IceAndFireAPI />
  </div>
  
</div>