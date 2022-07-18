<script lang="ts">
  import { Router, Route, Link } from 'svelte-navigator';
  import Features from './pages/Features.svelte';
  import Blog from './pages/Blog/index.svelte';
  import Welcome from './pages/Welcome.svelte';
  import About from './pages/About.svelte';
  import NavigationBar from './components/NavigationBar.svelte';
  import Display404 from './components/Display404.svelte';
</script>

<main class="fluid-container">
  <Router>
    <NavigationBar />
    <div>
      <Route path="/">
        <Welcome />
      </Route>
      <Route path="blog" component={Blog} />
      <Route path="about" component={About} />
      <Route path="features/*">
        <Features />
      </Route>
      <Route path="*">
        <Display404 />
      </Route>
    </div>
  </Router>
</main>

<style>
  .fluid-container {
    min-height: 70vh;
    min-width: 80vw;

    display: grid;
    align-items: flex-start;
    justify-items: center;
  }
</style>
