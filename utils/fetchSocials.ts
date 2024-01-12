import { Social } from '@/typings'

export const fetchSocials = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`,
    { next: { revalidate: 200 } }
  )
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const data = await res.json()
  const socials: Social[] = data.socials

  // console.log('fetching', socials)

  return socials
}
