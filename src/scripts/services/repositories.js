import { urlBase, repositoriesQuantity } from '/src/scripts/variables.js';

async function getRepositories(username) {
    const response = await fetch(`${urlBase}/${username}/repos?per_page=${repositoriesQuantity}`);
    return await response.json();
}

export { getRepositories }



    