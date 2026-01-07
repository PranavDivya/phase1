import axios from 'axios'
import { useState } from 'react'
import { Outlet, useSearchParams } from "react-router-dom"

// axios.get("https://fakestoreapi.com/users/")
//     .then( response => console.log(response.data) )
//     .catch( error => console.log(error.message) )

const newUser = {
    id: '21',
    name: 'User2'
}

// axios.post("http://localhost:3500/users", newUser)
//     .then( response => console.log(response.data) )
//     .catch( error => console.log(error.message) )

// axios.put("https://fakestoreapi.com/users/3", newUser)
//     .then( response => console.log(response.data) )
//     .catch( error => console.log(error.message) )

// axios.delete("http://localhost:3500/users/21")
//     .then( response => console.log(response.data) )
//     .catch( error => console.log(error.message) )

// axios.get("http://localhost:3500/users/21")
//     .then( response => console.log(response.data) )
//     .catch( error => console.log(error.message) )

export const Users = () => {
    const[searchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get('filter') === 'active'

    return(
        <>
            <h4>User 1</h4>
            <h4>User 2</h4>
            <h4>User 3</h4>
            <h4>User 4</h4>
            <h4>User 5</h4>
            <Outlet />
            <div>
                <button onClick={() => setSearchParams({filter: 'active'})}>Active users</button>
                <button onClick={() => setSearchParams({})}>Reset</button>
            </div>
            {
                showActiveUsers ? <h2>Active users</h2> : <h2>All users</h2>
            }
        </>
    )
}