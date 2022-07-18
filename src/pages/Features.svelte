<script lang="ts">
  import { Router, Route } from 'svelte-navigator';
  import Counter from '../lib/Counter.svelte';
  import UuidGenerator from '../lib/UuidGenerator.svelte';
  import IceAndFireAPI from './IceAndFireAPIConsumer.svelte';
  import TextManipulation from './textManipulation.svelte';
  import D3Animation from './d3Animation.svelte';
  import FeaturesNavigation from '../components/FeaturesNavigation.svelte';
</script>

<div class="container">
  <Router primary={false}>
    <FeaturesNavigation />
    <Route path="">
      <div>Some features developed</div>
    </Route>
    <Route path="counter" component={Counter} />
    <Route path="unique-id" component={UuidGenerator} />
    <Route path="3rd-party-api" component={IceAndFireAPI} />
    <Route path="text" component={TextManipulation} />
    <Route path="animation" component={D3Animation} />
  </Router>
</div>

<style>
  .container {
    min-width: 80vw;
    min-height: 80vh;
  }
</style>
