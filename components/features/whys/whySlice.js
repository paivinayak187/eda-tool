import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    trigger: "",
    whyThisCustomer: "",
    whys: Array(5).fill({ text: "" })
};

const whySlice = createSlice({
    name: "why",
    initialState: initialState,
    reducers: {
        updateTrigger: (state, action) => {
            state.trigger = action.payload
        },
        updateWhyThisCustomer: (state, action) => {
            state.whyThisCustomer = action.payload
        },
        updateWhys: (state, action) => {
            const why = state.whys[action.payload.index];
            why.text = action.payload.value;
        },
        addNewWhy: (state) => {
            state.whys.push({ text: "" });
        },
        deleteWhy: (state, action) => {
            state.whys.splice(action.payload.index, 1);
        }
    }
});

export const { updateTrigger, updateWhyThisCustomer, updateWhys, addNewWhy, deleteWhy } = whySlice.actions;
export default whySlice.reducer;