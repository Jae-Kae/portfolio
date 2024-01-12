import { Experience } from '@/typings'

export const fetchExperiences = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`,
    { next: { revalidate: 200 } }
  )
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const data = await res.json()
  const experiences: Experience[] = data.experiences

  return experiences
}
