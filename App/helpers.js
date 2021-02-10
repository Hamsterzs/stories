exports.adaptRequest = (req = {}) => {
    return Object.freeze({
        path: req.path,
        method: req.method,
        params: req.params,
        queryParams: req.query,
        body: req.body,
        user: req.user
    })
}

exports.createResponse = (status, message, data = {}) => {
    return {
        status: status,
        response: {
            success: status === 200 ? true : false,
            message: status !== 500 ? message : "internal server error",
            data: data,
        }
    }
}