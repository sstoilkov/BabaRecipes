import * as request from "./requester"

const baseUrl = 'http://localhost:3030'

export const getAll = () => {
    return request.get(`${baseUrl}/data/recipes`)
}