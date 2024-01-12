import { Project } from '@/typings'

export const fetchProjects = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`,
    { next: { revalidate: 200 } }
  )
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const data = await res.json()
  const projects: Project[] = data.projects

  // console.log('fetching', projects)

  return projects
}
