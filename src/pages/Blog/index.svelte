<script>
  import { Router, Route } from 'svelte-navigator';
  import Blog from './components/Blog.svelte';
  import BlogPost from './components/BlogPost.svelte';
  import Navigator from './navigator.svelte';
</script>

<Router primary={false}>
  <Navigator />
  <Route path="/">
    <Blog />
  </Route>
  <Route path="/:id" let:params>
    <BlogPost data-postid={params.id} />
  </Route>
</Router>
