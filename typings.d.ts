import Projects from './components/Projects'
interface SanityBody {
  _createdAt: string
  _id: string!
  _rev: string
  _updatedAt: string
}

interface Image {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export interface PageInformation extends SanityBody {
  _type: 'pageInformation'
  address: string
  backgroundInformation: string
  email: string
  role: string
  heroImage: Image
  name: string
  phoneNumber: string
  profilePic: Image
}

export interface Technology extends SanityBody {
  _type: 'skill'
  image: Image
  progress: number
  title: string
}

export interface Skill extends SanityBody {
  _type: 'skill'
  image: Image
  process: number
  title: string
}

export interface Experience extends SanityBody {
  _type: 'experience'
  company: string
  companyImage: Image
  dateStarted: Date
  dateEnded: Date
  isCurrentlyWorkingHere: boolean
  jobTitle: string
}

export interface Project extends SanityBody {
  _type: 'project'
  title: string
  image: Image
  linkToBuild: string
  summary: string
  technologies: Technology[]
}

export interface Social extends SanityBody {
  _type: 'social'
  title: string
  url: string
}