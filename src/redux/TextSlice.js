import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import { URI_API } from "../const/const"

export const fetchText = createAsyncThunk(
    'text/fetch',
    async(holiday)=>{
        const data = await fetch(URI_API + 'text/' + holiday)
        .then(data=>data.json())
        .then(data=>data)
        return data
    }
)


const TextSlice = createSlice({
    name:'text0',
    initialState:{
        text:'',
        loading:''
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchText.pending,(state,action)=>{
            state.loading = 'loading'
        })
        builder.addCase(fetchText.fulfilled,(state,action)=>{
            state.loading = 'success'
            state.text = action.payload
        })
        builder.addCase(fetchText.rejected,(state,action)=>{
            state.loading = 'failed'
        })
    }
})

export default TextSlice.reducer