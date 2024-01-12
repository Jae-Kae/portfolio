import { PageInformation } from '@/typings'

export const fetchPageInformation = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInformation`,
    { next: { revalidate: 200 } }
  )
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const data = await res.json()
  const pageInformation: PageInformation = data.pageInformation

  // console.log('fetching', pageInformation)

  return pageInformation
}
