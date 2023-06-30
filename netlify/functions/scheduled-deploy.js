const fetch = require('node-fetch')
import { schedule } from '@netlify/functions'

const BUILD_HOOK = 'https://api.netlify.com/build_hooks/649e9a5c39c22552e634a26d'

// Schedules the handler function to run every hour on the 15th minute
// Monday-Friday
const handler = schedule('15 * * * 1,5', async () => {
  await fetch(BUILD_HOOK, {
    method: 'POST'
  }).then(response => {
    console.log('Build hook response:', response)
  })

  return {
    statusCode: 200
  }
})

export { handler }