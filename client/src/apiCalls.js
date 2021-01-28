export const signUp = async (username, password) => {
    const response = await (await fetch("/api/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: password })
    })).json()

    return new Promise((resolve, reject) => {
        if (response) {
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