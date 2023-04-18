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
        addNewWhy: (state, action) => {
            state.whys.push({ text: "" });
        },
    }
});

export const { updateTrigger, updateWhyThisCustomer, updateWhys, addNewWhy } = whySlice.actions;
export default whySlice.reducer;