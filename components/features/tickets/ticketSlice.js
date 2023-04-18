import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    number: "123",
    title: ""
};

const ticketSlice = createSlice({
    name: 'ticket',
    initialState: initialState,
    reducers: {
        updateTicketNumber: (state, action) => {
            state.number = action.payload
        },
        updateTicketTitle: (state, action) => {
            state.title = action.payload
        }
    }
});

export const { updateTicketNumber, updateTicketTitle } = ticketSlice.actions;
export default ticketSlice.reducer;