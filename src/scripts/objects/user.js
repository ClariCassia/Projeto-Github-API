const user = {
    avatar: "",
    name: "",
    bio: "",
    followers: "",
    following: "",
    repositories: [],
    events: [],

    setInfo(user) {
        this.avatar = user.avatar_url;
        this.name = user.name;
        this.bio = user.bio;
        this.followers = user.followers;
        this.following = user.following
    },

    setRepositories(repositories) {
        this.repositories = repositories;
    },

    setEvents(events) {
        this.events = events;
    }
}

export { user }