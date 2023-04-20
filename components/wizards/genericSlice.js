import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    edaDate: new Date().toString()
}

const genericSlice = createSlice({
    name: 'genericSlice',
    initialState: initialState,
    reducers: {
        setEDADate: (state, action) => {
            state.edaDate = action.payload.toString()
        }
    }
});

export const { setEDADate } = genericSlice.actions;
export default genericSlice.reducer;