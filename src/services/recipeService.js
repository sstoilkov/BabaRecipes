import * as request from "./requester"

const baseUrl = 'http://localhost:3030/data/recipes'

export const getAll = () => {
    return request.get(baseUrl)
}

export const create = (recipeData) => {
    request.post(baseUrl, recipeData)
}