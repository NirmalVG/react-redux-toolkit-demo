import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "./userSlice"

export const UserView = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(fetchUsers())
  }, []) // <--- Fixed: Dependency array is now inside the function call

  return (
    <div>
      <h2>List of Users</h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}

      {/* Note: Ensure your slice returns objects with .name, or update this map */}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map((u) => (
            <li key={u.id}>{u.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
