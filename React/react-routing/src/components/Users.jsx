import { Outlet, useSearchParams } from "react-router-dom"
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