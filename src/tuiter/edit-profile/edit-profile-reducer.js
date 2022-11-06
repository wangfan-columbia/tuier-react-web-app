import { createSlice } from "@reduxjs/toolkit";
import editProfileInfo from './profile-edit.json';

const editProfileSlice = createSlice({
                                     name: 'editProfileInfo',
                                     initialState: editProfileInfo
                                 });

export default editProfileSlice.reducer;