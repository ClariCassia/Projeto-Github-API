import { urlBase  } from '/src/scripts/variables.js';

async function getUser(userName) {

  const response = await fetch(`${urlBase}/${userName}`)
  return await response.json()
  
  
}

export { getUser }


