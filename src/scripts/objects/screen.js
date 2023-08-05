const screen = {
    userProfile: document.querySelector(".profile-data"),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                            <img src="${user.avatar}">
                                        <div class="data">                                                                
                                            <h1>${user.name ?? `Não possui nome cadastrado 🥲 `}<h1/>
                                            <h3>${user.bio ?? `Não possui bio cadastrada 🥲 `}</h3>
                                            <p>${`Seguidores: ${user.followers} 👥` ?? `Não possui Seguidores 🥲 `}</p>
                                            <p>${`Seguindo: ${user.following} 👣 ` ?? `Este perfil não segue outros perfis 🥲 `}</p>
                                        </div>
                                     </div>`;

        let itemRepository = user.repositories.map(repo =>
            `<li><div class="info-repositories">
                                    <a href="${repo.html_url}" target="_blank"><strong>${repo.name}</strong>
                                        <div class="data-repositories">
                                            <ul>
                                             <li>🍴${repo.forks}</li>
                                                <li>⭐${repo.stargazers_count}</li>
                                                <li>👀${repo.watchers}</li>
                                                <li>👨‍💻${repo.language ?? "linguagem indefinida"}</li>
                                            </ul>
                                        </div>
                                    </a>
                                    </div>
                                </li>`
        ).join('');

        this.userProfile.innerHTML += `<div class="repositories">
                                                    <h2>Repositórios</h2>
                                                    <ul>${itemRepository}</ul>
                             <div>`

        const eventosValidos = user.events.filter(event =>
            event.type === "CreateEvent" || event.type === "PushEvent"
        );

        if (eventosValidos.length === 0) {
            this.userProfile.innerHTML += `<div class="eventos">
                                              <p>Não há eventos registrados</p>          
                                           </div>`;
            return;
        }

        const itemEvent = eventosValidos.map(event => {

            if (event.type === "CreateEvent") {

                const { repo, payload } = event;

                return `<li><strong>${repo.name}</strong> - Create: ${payload.ref_type}</li>`;

            } else if (event.type === "PushEvent") {

                const { repo, payload } = event;

                return `<li><strong>${repo.name}</strong> - ${payload.commits[0].message}</li>`;

            } else (!event.type === "CreateEvent" || !event.type === "PushEvent")
            {
                return
            }

        }).join('');

        this.userProfile.innerHTML += `<div class="eventos">
                                            <h2>Eventos</h2>
                                            <ul>${itemEvent}</ul>
                                         </div>`;

    },

    renderNotFound() {
        this.userProfile.innerHTML += `<h2>Usuário Não encontrado</h2>`
    },
}

export { screen }


