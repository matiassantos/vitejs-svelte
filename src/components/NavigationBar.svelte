<script lang="ts">
  import { Link } from 'svelte-navigator';
</script>

<div class="container">
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/features">Features</Link>
  <Link to="/features/animation">3D Animation</Link>
  <Link to="/">Transitions</Link>
</div>

<style>
  .container {
    position: sticky;
    top: 0px;
  }
</style>
