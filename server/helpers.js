exports.adaptRequest = (req = {}) => {
    return Object.freeze({
        path: req.path,
        method: req.method,
        params: req.params,
        queryParams: req.query,
        body: req.body,
        user: req.user,
        session: req.session,
        logOut: req.logOut,
    })
}