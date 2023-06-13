<script>
  import { onMount } from 'svelte';
  import {browser} from "$app/environment";
  import { page } from '$app/stores';

  let text =""
  onMount(async () => {
    const searchParams = browser && $page.url.searchParams
    let ref = searchParams.get("ref")
    let res = await fetch(`https://api.gateway.ethswarm.org/bzz/${ref}`)
    text = await res.text()
	});

  export async function load({ fetch }) {
    if (ref) {
      let res = await fetch(`https://api.gateway.ethswarm.org/bzz/${ref}`)
      let text = await res.text()
        return { text }
    }
  }
  
  const paste = async (message) => {
    text = ""
    const res = await fetch(`https://api.gateway.ethswarm.org/bzz`, {
      method: 'POST',
      body: message,
      headers: {
        'Content-Type': 'text/plain',
      },
    })
    const json = await res.json()
    return json.reference
  }

  let input = ""
  let reference = ""
  const handleClick = async () => {
    reference = await paste(input)
  }
</script>

<h1>Hi</h1>
<div>Upload reference: {reference}</div>
<div>Retrieved message: {text}</div>

<input bind:value={input}>
<button on:click={handleClick}>
	Paste
</button> 

