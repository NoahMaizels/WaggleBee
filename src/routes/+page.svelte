<script>
  /** @type {import('./$types').PageData} */    export let data;

  const paste = async (message) => {
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

<h1>{data.text}</h1>
<div>{reference}</div>

<input bind:value={input}>
<button on:click={handleClick}>
	Paste
</button> 
