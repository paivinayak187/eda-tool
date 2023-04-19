import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    number: "",
    title: "",
    description: ""
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
        },
        updateTicketDescription: (state, action) => {
            state.description = action.payload
        }
    }
});

export const { updateTicketNumber, updateTicketTitle, updateTicketDescription } = ticketSlice.actions;
export default ticketSlice.reducer;