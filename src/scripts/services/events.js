import { urlBase, eventsQuantity } from '/src/scripts/variables.js';

async function getEvents(username) {
    const response = await fetch(`${urlBase}/${username}/events?per_page=${eventsQuantity}`);
    return await response.json();
}

export { getEvents }