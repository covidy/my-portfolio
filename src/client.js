import SanityClient from '@sanity/client'

const client = new SanityClient({
  projectId: 'm7j48r8i',
  dataset: 'wilfolio',
  apiVersion: '2021-12-26', // use a UTC date string
  token: 'sanity-auth-token',
  useCdn: true
})

export default client