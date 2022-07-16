<script lang="ts">
  let count: number = 0
  const increment = () => {
    count += 1
  }
</script>

<h2>Simple clicks counter:</h2>
<pre>clicked {count} times</pre>
<button on:click={increment}>
  Click me
</button>
