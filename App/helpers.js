exports.createResponse = (status, message, data = {}) => {
    return {
        status: status,
        response: {
            success: status === 200 ? true : false,
            message: status !== 500 ? message : "Internal Server Error",
            data: data,
        }
    }
}