import axios from "axios"

const client = axios.create({baseURL: 'http://localhost:3500'})

export const request = ({...options }) => {
    client.defaults.headers.common.Authorization = `Bearer Token`
    const onSucces = response => {
        return response
    }
    const onError = error => {
        return error
    }

    return client(options).then(onSucces).catch(onError)
}