<script lang="ts">
  import { Router, Route, Link } from 'svelte-navigator';
  import Features from './pages/Features.svelte';
  import Blog from './pages/Blog.svelte';
  import Welcome from './pages/Welcome.svelte';
  import BlogPost from './pages/BlogPost.svelte';
  import About from './pages/About.svelte';
  import NavigationBar from './components/NavigationBar.svelte';
  import D3Animation from './pages/d3Animation.svelte';
</script>

<main class="fluid-container">
  <Router>
    <NavigationBar />
    <div>
      <Route path="/">
        <Welcome />
      </Route>
      <Route path="blog/:id" component={BlogPost} />
      <Route path="blog" component={Blog} />
      <Route path="about" component={About} />
      <Route path="features/*">
        <Features />
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
