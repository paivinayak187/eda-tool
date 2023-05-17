import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
    edaDate: moment().format('MM/DD/YYYY')
}

const genericSlice = createSlice({
    name: 'genericSlice',
    initialState: initialState,
    reducers: {
        setEDADate: (state, action) => {
            state.edaDate = moment(action.payload.toString()).format('MM/DD/YYYY')
        }
    }
});

export const { setEDADate } = genericSlice.actions;
export default genericSlice.reducer;