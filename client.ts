// client.ts
import {createClient} from '@sanity/client'

const client = createClient({
    projectId: 'wa0gckd9', // you can find this in sanity.json
    dataset: 'production', // or the name you chose in step 1
    apiVersion: '2021-08-31', // use a UTC date string
    useCdn: true // `false` if you want to ensure fresh data
})

export default client