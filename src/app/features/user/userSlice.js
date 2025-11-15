import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  loading: false,
  users: [],
  error: "",
}

// Fixed: Added 'return' and typically you want the full user object (name/id), not just IDs
export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data)
})

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {}, // Added empty reducers object (good practice even if empty)
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false
      state.users = action.payload
      state.error = ""
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false
      state.users = []
      state.error = action.error.message
    })
  },
})

export default userSlice.reducer
