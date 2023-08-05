import { getUser } from './services/user.js'
import { getRepositories } from './services/repositories.js'
import { getEvents } from './services/events.js'
import { user } from './objects/user.js'
import { screen } from './objects/screen.js'

document.getElementById("btn-search").addEventListener("click", () => {
    const userName = document.getElementById("input-search").value
    if (validEntry(userName)) return
    getUserProfile(userName)
})

document.getElementById("input-search").addEventListener("keyup", (e) => {
    const userName = e.target.value;
    const key = e.which || e.keyCode;
    const btnPressionado = key === 13;

    if (btnPressionado) {
        if (validEntry(userName)) return
        getUserProfile(userName)

    }
});

async function getUserProfile(username) {

    const responseUser = await getUser(username)
    const responseRepositories = await getRepositories(username)
    const responseEvents = await getEvents(username)      

    if (responseUser.message === "Not Found") {
        screen.renderNotFound()
        return
    }

    user.setInfo(responseUser)
    user.setRepositories(responseRepositories)
    user.setEvents(responseEvents)
    screen.renderUser(user)

}

function validEntry(userName) {
    if (userName.length === 0) {
        alert("Campo vazio digite o nome do usuario do GitHub")
        return true
    }
}
