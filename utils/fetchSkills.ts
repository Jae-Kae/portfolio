import { Skill } from '@/typings'

export const fetchSkills = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`, {
    next: { revalidate: 200 },
  })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const data = await res.json()
  const skills: Skill[] = data.skills

  // console.log('fetching', skills)

  return skills
}
