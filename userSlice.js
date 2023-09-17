import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
//import{BrowserRouter}from 'react-router-dom'
//const reducer = require('../cakes/cakeSlice')

const initialState ={
    loading:false,
    user1:[],
    error:''
}
export const fetchUsers = createAsyncThunk('user/fetchUsers',async ()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  return response.data
})
console.log(fetchUsers);
const userSlice= createSlice({
    name:'user',
    initialState,
    extraReducers: builder => {
      builder.addCase(fetchUsers.pending,state => {
        state.loading = true
      })
      builder.addCase(fetchUsers.fulfilled,(state,action)=>{
        state.loading = false
        state.user1= action.payload
        state.error=''

      })
      builder.addCase(fetchUsers.rejected,(state,action)=>{
        state.loading = false
        state.user1=[]
        state.error=action.error.message
      })
    }
})
export default userSlice.reducer
