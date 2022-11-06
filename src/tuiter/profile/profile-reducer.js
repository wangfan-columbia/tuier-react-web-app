import { createSlice } from "@reduxjs/toolkit";
import profileInfo from './profileInfo.json';

const profileSlice = createSlice({
                                   name: 'profileInfo',
                                   initialState: profileInfo
                               });

export default profileSlice.reducer;