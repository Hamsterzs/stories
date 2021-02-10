export const signUp = async (username, password) => {
    const response = await (await fetch("/api/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: password })
    })).json()

    return new Promise((resolve, reject) => {
        if (response) {
            console.log(response);
            resolve(response)
        } else {
            reject({ message: "error" })
        }
    })
}

export const signIn = async (username, password) => {
    const response = await (await fetch("/api/sign-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: password })
    })).json()

    return new Promise((resolve, reject) => {
        if (response) {
            console.log(response);
            resolve(response)
        } else {
            reject({ message: "error" })
        }
    })
}

export const signOut = async () => {
    const response = await (await fetch("/api/sign-out", { method: "POST" })).json()

    return new Promise((resolve, reject) => {
        if (response) {
            resolve(response)
        } else {
            reject({ message: "error" })
        }
    })
}

export const getUser = async () => {
    const response = await (await fetch(`/api/get-user`)).json()

    return new Promise((resolve, reject) => {
        console.log(response);
        if (response) resolve(response)
        else reject({ message: "error" })
    })
}

export const getUserStories = async (user) => {
    const response = await (await fetch(`/api/stories/${user}`)).json()

    return new Promise((resolve, reject) => {
        console.log(response);
        if (response) resolve(response)
        else reject({ message: "error" })
    })
}

export const getStories = async () => {
    const response = await (await fetch(`/api/stories`)).json()

    return new Promise((resolve, reject) => {
        if (response) resolve(response)
        else reject({ message: "error" })
    })
}

export const createStory = async (title, story) => {
    const response = await (await fetch("/api/stories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, story }),

    })).json()

    console.log(response);
}

export const deleteStory = async (id) => {
    const response = await (await fetch(`/api/stories/${id}`, {
        method: "DELETE",
    })).json()

    console.log(response);
}