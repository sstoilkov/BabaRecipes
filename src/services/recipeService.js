import * as request from "./requester"

const baseUrl = 'http://localhost:3030/data/recipes'

export const getAll = () => {
    return request.get(baseUrl)
}
export const getOne = (recipeId) => {
    return request.get(`${baseUrl}/${recipeId}`)
}

export const create = (recipeData) => {
    request.post(baseUrl, recipeData)
}

export const edit = (recipeData, recipeId) => {
    request.put(`${baseUrl}/${recipeId}`, recipeData)
}

export const remove = (recipeId) => {
    request.del(`${baseUrl}/${recipeId}`)
}