<script>
  import svelteLogo from '../assets/svelte.svg';
  import viteLogo from '../assets/vite.svg';
  import softEngineer from '../assets/developer_activity.svg';
</script>

<section class="container">
  <div class="column left text-left">
    <h1>Matias Santos</h1>

    <h3>Software developer.</h3>
  </div>
  <div class="column right">
    <img src={softEngineer} class="logo" alt="software engineer" />
  </div>
</section>

<style>
  .container {
    display: grid;
    grid-template-columns: 40vw 40vw;
    grid-template-rows: 100vh;
    align-items: center;
    justify-items: center;
  }

  .text-left {
    text-align: start;
  }
  .logo {
    height: 45vh;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #8b8b8b);
  }
</style>
