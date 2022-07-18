<script lang="ts">
  import { Link } from 'svelte-navigator';
</script>

<div class="container">
  <Link to="/">Home</Link>
  <Link to="/features">Features</Link>
  <Link to="/blog">Blog</Link>
  <Link to="/about">About me</Link>
</div>

<style>
  .container {
    position: sticky;
    top: 0px;
  }
</style>
