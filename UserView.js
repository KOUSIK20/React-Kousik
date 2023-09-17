import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchUsers } from './userSlice'
export const UserView = () => {
  const user = useSelector((state)=>state.user)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchUsers())
   
  },[dispatch])
  console.log('user',user);
  return (
    <div>
      <h1 className='api'>Getting data from API</h1>
        <h2 className='api'>List of Users</h2>
        {user.loading && <div className='api'>Loading...</div>}
        {!user.loading && user.error?<div>Error:{user.error}</div>:null }
        {!user.loading && user.user1.length ? (
          <ul className='api'>
            {
              user.user1.map(user=>(
                <li className='api' key={user.id}>{user.name}</li>
              ))
            }
          </ul>
        ):null}
    </div>
  )
}
