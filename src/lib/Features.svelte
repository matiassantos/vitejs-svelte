<script lang="ts">
  import Counter from './Counter.svelte';
  import UuidGenerator from './UuidGenerator.svelte';
  import IceAndFireAPI from '../pages/IceAndFireAPIConsumer.svelte';
  import TextManipulation from '../pages/textManipulation.svelte';
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
  <div class="card">
    <TextManipulation />
  </div>
</div>
