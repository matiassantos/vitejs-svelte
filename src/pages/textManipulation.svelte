<script>
  import { map, delay } from 'rxjs/operators';
  import { SvelteSubject } from '../lib/models/SvelteSubject';

  export const name = new SvelteSubject('');

  const nameUpperCase = name.pipe(map((n) => n.toUpperCase()));
  const nameDelayed = name.pipe(delay(1000));
  const nameScrambled = name.pipe(
    map((n) =>
      n
        .split('')
        .sort(() => 0.5 - Math.random())
        .join('')
    )
  );

  function clear() {
    name.set('');
  }
</script>

<h2>Text manipulation</h2>

<label for="text-input-for-manipulation">Please enter your name or some text</label>
<input id="text-input-for-manipulation" bind:value={$name} />

<button on:click={clear}> Clear text </button>

<p>Hello, {$name}</p>
<p>Uppercased: {$nameUpperCase}</p>
<p>Delayed: {$nameDelayed}</p>
<p>Scrambled: {$nameScrambled}</p>
