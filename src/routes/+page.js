/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url }) {
  const ref = url.searchParams.get('ref');
  if (ref) {
    let res = await fetch(`https://api.gateway.ethswarm.org/bzz/${ref}`)
    let text = await res.text()
    console.log(text)
    return { text }
  }
}