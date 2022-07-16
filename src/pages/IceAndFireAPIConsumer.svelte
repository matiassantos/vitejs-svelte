<script>
  import { of, BehaviorSubject } from 'rxjs'
  import { fromFetch } from 'rxjs/fetch'
  import {
    map,
    concatMap,
    catchError,
    switchMap,
    startWith,
    debounceTime,
  } from 'rxjs/operators'
  import {SvelteSubject} from '../lib/models/SvelteSubject';

  const typeAhead = new SvelteSubject('');

  const books = typeAhead.pipe(
    debounceTime(350),
    switchMap((query) => {
      if (!query) {
        return of([])
      }
      return fromFetch(`https://www.episodate.com/api/search?q=${query}`).pipe(
        switchMap((response) => {
          if (response.ok) {
            return response.json()
          } else {
            return of({ error: true, message: `Error ${response.status}` })
          }
        }),
        catchError((err) => of({ error: true, message: err.message })),
      )
    }),
    startWith([]),
  )
</script>

<h1>Ice and Fire API</h1>
<h2>Search for show episodes</h2>
<input id="episode-searhc-input" bind:value="{$typeAhead}" />

<pre>{ JSON.stringify($books, ["tv_shows", "id", "name"], 2) }</pre>